import { Component, OnInit } from '@angular/core';
import { ProductService, ResponseMsg } from '../../service/product.service';
import { AlertMsg } from '../../layout/AlertMessage';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alert: ResponseMsg[] = [];
  constructor(
    private productService: ProductService
  ) {

  }


  addProduct(body): boolean {
    if (body.Product_name === "") {
      this.alert.push({ message: "Please enter name", msgClass: "alert alert-warning" })
      return true;
    } else if (body.Product_descr === "") {
      this.alert.push({ message: "Please enter description", msgClass: "alert alert-warning" })
      return true;
    } else if (body.Product_price === "") {
      this.alert.push({ message: "Please enter price", msgClass: "alert alert-warning" })
      return true;
    }
    this.productService.addNewProduct(body).subscribe(
      (res) => {
        console.log(res)
        this.alert.push({ message: "New product added", msgClass: "alert alert-success" });
        console.log(this.alert)
      },
      (error) => {
        this.alert.push({ message: "Something goes wrong", msgClass: "alert alert-danger" });

      }
    )


  }
  ngOnInit() {
  }

}
