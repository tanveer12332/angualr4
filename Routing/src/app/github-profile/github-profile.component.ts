import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { 
  
  }

  ngOnInit() {
    //tow way get param
    //1st
    // this.route.paramMap
    // .subscribe(params=>{
    //   var id = +params.get('id')
    //   console.log(id);
    // });

    //2nd way
    var id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    var div =  document.createElement('div');
    div.innerHTML = "This is Followers id: <strong>" + id + "</strong>";
    var g = document.getElementById('text');
    g.appendChild(div);
  }
  onSubmit(){
    this.router.navigate(['/followers'],{
      queryParams : {
        page : 1,
        order : 'newest'
      }

    })
  }
}
