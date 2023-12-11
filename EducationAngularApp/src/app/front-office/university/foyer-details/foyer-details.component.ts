import { Component } from '@angular/core';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/Services/foyer.service';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/models/Bloc';
@Component({
  selector: 'app-foyer-details',
  templateUrl: './foyer-details.component.html',
  styleUrls: ['./foyer-details.component.css']
})
export class FoyerDetailsComponent {
  foyerDetails: Foyer;
  blocs:Bloc[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private foyerDetailsService: FoyerService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['nomFoyer'])
    this.loadFoyerDetails();
  }

  private loadFoyerDetails(): void {
    // Get the nomFoyer parameter from the route
    const nomFoyer = this.activatedRoute.snapshot.params['nomFoyer'];

    // Call the service to get foyer details
    this.foyerDetailsService.getFoyerDetails(nomFoyer).subscribe(
      (details: Foyer) => {
        this.foyerDetails = details;
      },
      (error) => {
        console.error('Error fetching foyer details:', error);
        // Handle error as needed
      }
    );
  }
}