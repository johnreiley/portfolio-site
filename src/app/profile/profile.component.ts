import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  year = new Date().getFullYear();
  icons = {
    angular: "/assets/angular.png",
    firebase: "/assets/firebase.png",
    postgresql: "/assets/postgresql.png",
    php: "/assets/php.svg",
    htmlCssJavascript: "/assets/html-js-css.png",
    googleCloud: "/assets/google-cloud-crop.png",
    scss: "/assets/scss.png",
    bootstrap: "/assets/boostrap.png",
    nodejs: "/assets/nodejs.png",
    react: "/assets/react-crop.png",
    socketIo: "/assets/socket-io.svg",
  }
  skills: string[] = [
    "Angular", "TypeScript",
    "HTML", "CSS3", "JavaScript",
    "C#", ".NET Core", "ASP.NET",
    "Node.js", "Firebase",
    "MSSQL", "Git"
  ]
  projects: Project[] = [
    {
      url: "https://github.com/johnreiley/Studygorize",
      image: "/assets/studygorize.png",
      imgAlt: "Studygorize icon",
      title: "Studygorize",
      description: "An Angular web app for studying tabled structures of information.",
      tags: [this.icons["angular"], this.icons["firebase"], this.icons["scss"]]
    },
    {
      url: "https://reciply-f2e60.web.app/",
      image: "/assets/recipe_drawer_2.png",
      imgAlt: "Recipe Drawer Icon",
      title: "Recipe Drawer",
      description: `An Angular web app for storing recipes and building a shopping list for personal use.`,
      tags: [this.icons["angular"], this.icons["firebase"], this.icons["nodejs"], this.icons["scss"]]
    },
    {
      url: "https://github.com/johnreiley/draw-together",
      image: "/assets/draw-together.png",
      imgAlt: "Draw Together Icon",
      title: "Draw Together",
      description: `An web app I wrote while learning React and Socket.io that allows friends and family to draw together online.`,
      tags: [this.icons["react"], this.icons["socketIo"], this.icons["nodejs"]]
    },
    {
      url: "https://github.com/johnreiley/mc-server-manager",
      image: "/assets/minecraft-server-manager.png",
      imgAlt: "mc server manager icon",
      title: "Minecraft Server Manager",
      description: `A simple web app I made for my friends and I to easily toggle our Minecraft server on and off. 
      It utilizes APIs exposed by Google Cloud Compute and has some simple server-side authentication built in.`,
      tags: [this.icons["nodejs"], this.icons["googleCloud"], this.icons["htmlCssJavascript"]]
    },
    {
      url: "http://calm-bastion-61884.herokuapp.com/project-blog/index.php",
      image: "/assets/blog-site.jpg",
      imgAlt: "blog screenshot",
      title: "Blog Site",
      description: `A simple blog website I made during the first half of the course Web Engineering
      II. It's running on a PHP/PostgreSQL backend hosted on Heroku and uses homemade CSS styling.`,
      tags: [this.icons["php"], this.icons["postgresql"], this.icons["htmlCssJavascript"]]
    },
    {
      url: "https://github.com/johnreiley/vehctra",
      image: "/assets/vehctra.png",
      imgAlt: "Vehctra icon",
      title: "Vehctra: Vehicle Care Tracker",
      description: `An unfinished web app designed to allow vehicle owners to store vehicle information and history such as
      services and fuel-ups. Made for the second half of Web Engineering II in 6 weeks.`,
      tags: [this.icons["nodejs"], this.icons["firebase"], this.icons["htmlCssJavascript"]]
    },
    {
      url: "https://github.com/supermormon/fs-fullscreen-file-viewer",
      image: "/assets/family_fullscreen.png",
      imgAlt: "family search fs file viewer icon",
      title: "Fullscreen Family Search Record Viewer Extension",
      description: `An Chrome extension that adds a toggle to hide
      the navigation when viewing scanned records on familysearch.org.`,
      tags: [this.icons["htmlCssJavascript"]]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
