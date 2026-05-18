using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("BasketItems")]
public class BasketItem
{
    public int Id { get; set; }
    public int Quantity { get; set; }

    //nav props
    public int ProductId {get;set;}
    public required Product Product {get;set;}

    //needed so ef core builds this w the conventions I want
    public int BasketId {get;set;}
    public  Basket Basket {get;set;} = null!;

}
