import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(private http:HttpClient) { }
  uploadImage(preSignedUrl: string, file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.put(preSignedUrl, file, {
        headers: { 'Content-Type': encodeURI(file.type) },
      }).subscribe({
        next: () => {
          console.log('Image upload success');
          resolve(); 
        },
        error: (error) => {
          console.error('Error uploading image', error);
          reject(error);
        },
      });
    });
  }
}
