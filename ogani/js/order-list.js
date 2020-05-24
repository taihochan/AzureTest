var order_items=document.querySelector('.order_items')
var order_allstatus=document.querySelectorAll('.order_status ul li');

var order = [
                {
                    ProductImage:"img/blog/blog-3.jpg",
                    ProductBrand:"Sony",
                    ProductName:"WF-XB700",
                    ProductColor:"black",
                    Quantity:1,
                    Price:3990,
                    OrderDate:"29/04/2019",
                    TotalAmount:1,
                    Total:3990,
                    CurrencySituation:"Buyer pickup"
                },
                {
                    ProductImage:"img/blog/blog-2.jpg",
                    ProductBrand:"Sony",
                    ProductName:"WI-C600N",
                    ProductColor:"black",
                    Quantity:1,
                    Price:3990,
                    OrderDate:"29/04/2019",
                    TotalAmount:1,
                    Total:3990,
                    CurrencySituation:"Change"
                },
                {
                    ProductImage:"img/blog/blog-1.jpg",
                    ProductBrand:"Sony",
                    ProductName:"WF-XB700",
                    ProductColor:"black",
                    Quantity:2,
                    Price:3990,
                    OrderDate:"29/04/2019",
                    TotalAmount:1,
                    Total:3990,
                    CurrencySituation:"Shipping"
                },
                {
                    ProductImage:"img/blog/blog-4.jpg",
                    ProductBrand:"Sony",
                    ProductName:"WF-XB700",
                    ProductColor:"black",
                    Quantity:1,
                    Price:3990,
                    OrderDate:"29/04/2019",
                    TotalAmount:1,
                    Total:3990,
                    CurrencySituation:"Cancel"
                },
                {
                    ProductImage:"img/blog/blog-5.jpg",
                    ProductBrand:"Sony",
                    ProductName:"WF-XB700",
                    ProductColor:"black",
                    Quantity:1,
                    Price:3990,
                    OrderDate:"29/04/2019",
                    TotalAmount:1,
                    Total:3990,
                    CurrencySituation:"Complete"
                },
                {
                    ProductImage:"img/blog/blog-6.jpg",
                    ProductBrand:"Sony",
                    ProductName:"WF-XB700",
                    ProductColor:"black",
                    Quantity:1,
                    Price:3990,
                    OrderDate:"29/04/2019",
                    TotalAmount:1,
                    Total:3990,
                    CurrencySituation:"Return"
                }
            ]

let Current = [];
let returnorchange = [];
let cancel = [] ;
let complete = [];
order.forEach(el=>{
    if(el.CurrencySituation=="Change" || el.CurrencySituation=="Return")
    {
        returnorchange.push(el);
    }
    else if(el.CurrencySituation=="Complete")
    {
        complete.push(el);
    }
    else if(el.CurrencySituation == "Cancel")
    {
        cancel.push(el);
    }
    else
    {
        Current.push(el);
    }
})



order_allstatus.forEach(el=>
    el.addEventListener('click',function(){
        let order_action=document.querySelector('.order_status_action');
        let order_action_id = this.getAttribute('id');
        order_action.removeAttribute('class');
        order_action.classList.add('btn');
        this.classList.add('order_status_action')
        order_items.innerHTML='';
        if(order_action_id=="all")
        {
            CreateOrders(order);
        }
        else if(order_action_id=="current")
        {
            CreateOrders(Current);
        }
        else if(order_action_id=="complete")
        {
            CreateOrders(complete);
        }
        else if(order_action_id=="returnorchange")
        {
            CreateOrders(returnorchange);
        }
        else if(order_action_id=="cancel")
        {
            CreateOrders(cancel);
        }
    })
)

function CreateOrders(Array){
    let template = document.querySelector('#ordertemplate');
    Array.forEach(item=>{
        let cloneContent = template.content.cloneNode(true);
        let img = cloneContent.querySelector('.order_list_item__pic img');
        let productname = cloneContent.querySelector('.order_list_item__title__text h5');
        let productcolor = cloneContent.querySelector('.order_list_item__title__text p');
        let quantity = cloneContent.querySelector('.order_list_item_quantity');
        let price = cloneContent.querySelector('.order_list_item_price');
        let orderdate = cloneContent.querySelector('.order_list_item_date');
        let total = cloneContent.querySelector('.order_list_item_total');
        let totalprice = cloneContent.querySelector('.order_list_item_totalprice');
        let currencysituation = cloneContent.querySelector('.order_list_item_currencysituation');
        // debugger
        img.setAttribute('src', `${item.ProductImage}`);
        productname.innerText=`${item.ProductBrand} ${item.ProductName}`;
        productcolor.innerText=`color : ${item.ProductColor}`;
        quantity.innerText=`Quantity : ${item.Quantity}`;
        price.innerText=`$${item.price}`;
        orderdate.innerHTML=`<i class="fa fa-calendar-o"></i> ${item.OrderDate}`;
        total.innerText=`Total amount : ${item.Total}`;
        totalprice.innerText=`Order Amount : ${item.TotalAmount}`;
        currencysituation.innerText=`${item.CurrencySituation}`;
        order_items.appendChild(cloneContent);
    })
}
CreateOrders(order);
