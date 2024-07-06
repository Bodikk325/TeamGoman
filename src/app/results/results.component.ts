import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {


  showRenatoResults: boolean = false;
  showTeamResults: boolean = false;

  teamResults = [
    {
      title: "RAMI MENDEZ",
      description: "K-1 felnőtt Világkupa győztes, Kempo világkupa győztes",
      images: ["assets/Rami.webp"]
    },
    {
      title: "VASKÓ RICHÁRD",
      description: "Világkupa győztes, Hét meccses veretlenségi sorozat",
      images: ["assets/richard.gif"]
    },
    {
      title: "LAKATOS ISTVÁN",
      description: "K-1 világkupa győztes",
      images: ["assets/profil.webp"]
    },
  ]

  results = [
    {
      title: "Glory Enfusion meccs győzelem",
      description: "Az egyik legnagyobb K1 színpadon aratott győzelem. Ezen a gálán küzdenek olyan emberek mint Badr Hari, Rico Verhoeven vagy Ben Sadik!",
      images: ["assets/Enfusion1.webp", "assets/Enfusion2.webp", "assets/Enfusion3.webp"]
    },
    {
      title: "Glory RIVALS 1",
      description: "",
      images: ["assets/Glory1.webp", "assets/Glory2.webp", "assets/GLory3.webp", "assets/GLory4.webp"]
    },
    {
      title: "Osztrák szervezet WMAC profi K1 világbajnoka",
      description: "",
      images: ["assets/wmac1.webp", "assets/wmac4.webp", "assets/wmac2.webp", "assets/wmac3.webp"]
    },
    {
      title: "Nemzetközi Profi négyestorna győztese",
      description: "",
      images: ["assets/NemzetkNegyes1.webp", "assets/NemzetkNegyes2.webp", "assets/NemzetkNegyes3.webp", "assets/NemzetkNegyes4.webp"]
    },
    {
      title: "Profi magyar bajnoki négyestorna győztese",
      description: "",
      images: ["assets/SImaProfi1.webp", "assets/SImaProfi2.webp", "assets/SImaProfi3.webp"]
    },
    {
      title: "TEK gála",
      description: "Győzelem a 2x holland bajnok ellen",
      images: ["assets/Tek1.webp", "assets/Tek2.webp", "assets/Tek3.webp", "assets/Tek4.webp"]
    },
    {
      title: "A magyar válogatott tagja",
      description: "",
      images: ["assets/Magyarvalogatott.webp", "assets/Magyarvalogatott2.webp"]
    },
    {
      title: "ESZTERGOM Nyolcas Kupa győzelem",
      description: "",
      images: ["assets/Esztergom1.webp", "assets/Esztergom2.webp", "assets/Esztergom5.webp", "assets/Esztergom6.webp", "assets/Esztergom7.webp"]
    },
    // Add more results as needed
  ];

  toggleRenatoResults() {
    this.showRenatoResults = !this.showRenatoResults;
  }

  toggleTeamResults() {
    this.showTeamResults = !this.showTeamResults;
  }


  showHeader = false;
  mobileMenuOpen = false;

  constructor() { }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
