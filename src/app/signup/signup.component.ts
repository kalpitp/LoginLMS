import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  driverLicense: string='';
  address: string='';
  password:string='';
  confirmPassword:string='';
  baseUrl: string = '';
  selectedRole: string = '';
  imageUrl: string = 'https://www.freshbooks.com/wp-content/uploads/2022/01/what-is-a-warehouse.jpg';


  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      
    });
  }

  
  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      
      console.log(this.registrationForm.value);
    } else {
      
      alert('Please fill in all required fields.');
    }
  }

  onRoleChange() {
    this.selectedRole = this.formControls['role'].value;
   switch (this.selectedRole) {
      case 'manager':
        this.imageUrl = 'https://imageio.forbes.com/specials-images/imageserve/60ecafbf0888bc9119950aaf/Successfully-transitioning-from-manager-to-leader-is-essential-to-climb-the-corporate/960x0.jpg?format=jpg&width=960'; // Replace with the URL of 1.jpg
        break;
      case 'customer':
        this.imageUrl = 'https://www.smallbusiness.wa.gov.au/sites/default/files/2021-09/keeping-your-customers-happy.jpg'; 
        break;
      case 'driver':
        this.imageUrl = 'https://info.drivedifferent.com/hubfs/SMI-BLOG-Ways-to-Improve-Drivers-Happiness%20%281%29.jpg'; 
        break;
      
      default:
        this.imageUrl = this.baseUrl; // Use the base URL if no specific role is selected
        break;
    }
  }
  userInput: string = ''
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let newValue = inputElement.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    inputElement.value = newValue; // Update the input value
    this.userInput = newValue; // Update the bound model value
  }
  onNgFormSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  

  
}
