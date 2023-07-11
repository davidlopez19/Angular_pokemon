import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RestService {
  private frase: any = { value: "", icon_url: "", id: "", url: "" };

  private ChuckUrl = "https://api.chucknorris.io/jokes/random"; // URL to web api

  constructor(private http: HttpClient) { }

  public getFrase(): Observable<any> {
    return this.http.get<any>(this.ChuckUrl);
  }

  public postFrase(): Observable<any> {
    return this.http.post<any>(this.ChuckUrl, "");
  }
  
}