// immobilier-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-immobilier-list',
  templateUrl: './immobilier-list.component.html',
  styleUrls: ['./immobilier-list.component.css']
})
export class ImmobilierListComponent implements OnInit {
  realties: any[] = [];
  error: string | null = null;
  searchPrice: number | null = null;
  filteredRealties: any[] = [];
  updateForm: FormGroup = new FormGroup({});
  selectedRealty: any;
  showUpdateForm = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  openUpdateModal(realty: any) {
    this.selectedRealty = realty;
    this.showUpdateForm = true;
    this.updateForm.patchValue({
      address: realty.address,
      price: realty.price,
      bedrooms: realty.bedrooms,
      bathrooms: realty.bathrooms,
      details: realty.imageUrl,
    });
  }

  onSubmit() {
    if (this.updateForm.valid && this.selectedRealty) {
      const updatedData = this.updateForm.value;
      const realtyId: string = this.selectedRealty._id;

      this.updateRealtyServiceFn(realtyId, updatedData);
    }
  }

  updateRealtyServiceFn(realtyId: string, updatedData: any): void {
    const updateUrl = `http://localhost:3000/abc/immobilier/update/${realtyId}`;

    this.http.put(updateUrl, updatedData)
      .subscribe(
        (response) => {
          this.showUpdateForm = false;
          console.log('Update Successful', response);

          this.getAllRealties();
          // Implémentez la logique pour gérer l'immobilier mis à jour (si nécessaire)
        },
        (error) => {
          console.error('Update Failed', error);
          this.error = 'Error updating realty';
        }
      );
  }

  cancelUpdate() {
    this.showUpdateForm = false;
  }

  ngOnInit(): void {
    this.getAllRealties();
    this.updateForm = this.formBuilder.group({
      address: ['', Validators.required],
      price: [0, Validators.required],
      bedrooms: [0, Validators.required],
      bathrooms: [0, Validators.required],
      details: ['', Validators.required],
    });
  }

  getAllRealties() {
    const apiUrl = 'http://localhost:3000/abc/immobilier/getAll';
    this.http.get<any[]>(apiUrl)
      .subscribe(
        (data) => {
          this.realties = data;
          this.filteredRealties = data; // Initialisez filteredRealties avec toutes les realties au début
        },
        (error) => {
          console.error('Error fetching realties:', error);
          this.error = 'Error fetching realties';
        }
      );
  }

  deleteRealty(realtyId: string): void {
    const deleteUrl = `http://localhost:3000/abc/immobilier/delete/${realtyId}`;

    this.http.delete(deleteUrl)
      .subscribe(
        (response) => {
          console.log('Delete Successful', response);
          // Reload the realties after deletion
          this.getAllRealties();
        },
        (error) => {
          console.error('Delete Failed', error);
          this.error = 'Error deleting realty';
        }
      );
  }

  filterRealties() {
    if (this.searchPrice !== null) {
      this.filteredRealties = this.realties.filter(realty => realty.price === this.searchPrice);
    } else {
      this.filteredRealties = this.realties;
    }
  }
}
