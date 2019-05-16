import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ContactFormService } from "../../core/contact-form.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.sass"]
})
export class ContactFormComponent implements OnInit {
  public status = "";
  public message = "";
  public contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    email: new FormControl(""),
    message: new FormControl("")
  });

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit() {}

  send() {
    if (this.contactForm.valid) {
      this.contactFormService.send(this.contactForm).subscribe(response => {
        this.status = response.status;
        this.message = response.message;
      });
    } else {
      console.log(this.contactForm.status);
    }
  }
}
