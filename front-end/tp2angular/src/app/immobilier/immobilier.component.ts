// immobilier.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})

export class ImmobilierComponent {
  
  // Your form data
  address: string = '';
  price: number = 0;
  bedrooms: number = 0;
  bathrooms: number = 0;
  imageUrl: string = '';

  // Loading and error handling
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  addRealty() {
    this.errorMessage = '';
    this.isLoading = true;
  
    const realtyData = {
      address: this.address,
      price: this.price,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms,
      imageUrl: this.imageUrl
    };
  
    this.http.post("http://localhost:3000/abc/immobilier/ajouter", realtyData)
  .subscribe(
    (resultData: any) => {
      console.log(resultData);

      if (resultData.success) {
        // Display success alert or handle success as needed
        alert("Realty added successfully");
        this.errorMessage = "";  // Clear any previous error message
        this.router.navigateByUrl('/liste');
      } else {
        // Display error message
        this.errorMessage = "Error adding Realty";
        console.log("Error adding Realty:", resultData.message);
      }

      // Reset loading status
      this.isLoading = false;
    },
    (error) => {
      console.error("Error adding Realty:", error);
      alert("An error occurred while adding Realty. Check console for details.");
      // Reset loading status
      this.isLoading = false;
    }
  );
  
}
}