using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController(StoreContext context) : BaseApiController
{
  [HttpGet]
  public async Task<ActionResult<BasketDto>> GetBasket()
  {
    var basket = await RetrieveBasket();
    Console.WriteLine($"got basket: {basket?.BasketId}");

    if (basket == null) return NoContent();

    return basket.ToDto();
  }

  [HttpPost]
  public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
  {
    Console.WriteLine($"Looking for {productId}...");
    var basket = await RetrieveBasket();
    basket ??= CreateBasket();
    Console.WriteLine($"created basket in add item: {basket}");
    var product = await context.Products.FindAsync(productId);

    if (product == null) return BadRequest("Problem adding item to basket");

    basket.AddItem(product, quantity);
    var result = await context.SaveChangesAsync() > 0;

    if (result) return CreatedAtAction(nameof(GetBasket), basket.ToDto());

    return BadRequest("Problem updating basket");
  }


  [HttpDelete]
  public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
  {
    var basket = await RetrieveBasket();

    if (basket == null) return BadRequest("unable to get basket");

    basket.RemoveItem(productId, quantity);
    var result = await context.SaveChangesAsync() > 0;

    if (result) return Ok();

    return BadRequest("Problem updating basket");
  }

  private async Task<Basket?> RetrieveBasket()
  {
    Console.WriteLine("looking for basket");
    return await context.Baskets
      .Include(x => x.Items)
      .ThenInclude(x => x.Product)
      .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);
  }

  private Basket CreateBasket()
  {
    var basketId = Guid.NewGuid().ToString();
    var cookieOptions = new CookieOptions
    {
      IsEssential = true,
      Expires = DateTime.UtcNow.AddDays(30)
    };
    Response.Cookies.Append("basketId", basketId, cookieOptions);
    var basket = new Basket { BasketId = basketId };
    context.Baskets.Add(basket);

    return basket;
  }
}

