/**
 * Global Imports
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import $ from 'jquery';

/**
 * Environment Import
 */
import { SocketIO } from './socket.class';

const environment = {
	production: false,
	anyorigin: true,
	API:{
		//baseURL: 'http://trekking.pixeloidestudios.com/api/v1/',
		baseURL: 'http://rutasdetrekking.com/api/v1/',
		get: function():string{ return environment.API.baseURL; }
	},
	SOCKET:{
		protocol: 'http',
		baseURL: 'localhost',
		port: '3000',
		get: function():string{ return `${environment.SOCKET.protocol}://${environment.SOCKET.baseURL}:${environment.SOCKET.port}/`; }
	}
};


/**
 * [API Rest Service definition]
 */
@Injectable()
export class ApiService {
	protected headers:Headers;
	protected baseUrl:string = environment.API.get();
	protected socket:SocketIO;
	protected baseConnection:string = environment.SOCKET.get();

	constructor(
		protected http:Http, 
		protected authHttp:AuthHttp, 
		protected storage:Storage) {
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
	}
	
	
	/**
	 * Common http calls
	 */
	public async get(method:string):Promise<any> {
		let url = environment.anyorigin ? `http://anyorigin.com/go?url=${encodeURIComponent(this.baseUrl + method)}&callback=?` : this.baseUrl + method;
		console.log("URL is ", url);

		try {
			let response = await this.fullUrlGet(url);
			if (environment.anyorigin) return response.contents;
			else return response;
		} catch (error) {
			console.log("An error ocurred trying to fetch data");
			return error;
		}
	}
	
	public post(method:string, body:any):Observable<any>{
		return this.http.post(this.baseUrl + method, body, {headers: this.headers});
	}
	
	public postFormLike(method:string, body:any):Observable<any>{
		let customHeader = new Headers();
		customHeader.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post(this.baseUrl + method, body, {headers: customHeader});
	}

	public put(method:string, body:any):Observable<any>{
		return this.http.put(this.baseUrl + method, body, {headers: this.headers});
	}

	public delete(method:string):Observable<any>{
		return this.http.delete(this.baseUrl + method, {headers: this.headers});
	}

	public connect():SocketIO{
		try {
			this.socket = new SocketIO(this.baseConnection);
			return this.socket;
		}catch (error){
			console.log("Socket error :: ", error);
		}
	}

	/**
	 * Auth http calls
	 */
	public authGet(method:string):Observable<any>{
		return this.authHttp.get(this.baseUrl + method);
	};

	public authPost(method:string, body:any):Observable<any>{
		return this.authHttp.post(this.baseUrl + method, body);
	}

	public authPostFormLike(method:string, body:any):Observable<any>{
		let customHeader = new Headers();
		customHeader.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.authHttp.post(this.baseUrl + method, body, {headers: customHeader});
	}

	public async authPostMultipart(method:string, file:File):Promise<any>{

		/*let headers_ = this.tokenService.currentAuthHeaders;
		console.log("Headers_", headers_.get('Authorization'));
		let formData:FormData = new FormData();
        formData.append('name', 'Moisés');
		formData.append('image', file, file.name);
		let customHeader = new Headers();
		customHeader.append('Authorization', `Bearer ${await this.storage.get('token')}`);
		//customHeader.append('Content-Type', 'multipart/form-data');
		return this.http
			.post(this.baseUrl + method, formData , { headers: customHeader })
			.map(response => response.json())
			.toPromise();*/


		return new Promise(async (resolve, reject) => {
			try {
				//-- Prepare form
				let form = new FormData();
				form.append('image', file);
	
				//-- Get token
				let token = await this.storage.get('token');
				if (token == null || token == undefined) 
					throw new Error("Token is not set");

				//-- Prepare jquery AJAX request
				$.ajax({
					url: this.baseUrl + method,
					type: 'POST',
	
					// Form data
					data: form,
	
					cache: false,
					contentType: false,
					processData: false,
					crossDomain: true,

					headers: {
						'Authorization': `Bearer ${token}`
					},
	
					success: function(data, textStatus, jqXHR){
						resolve(data);
					},
					error: function(err){
						throw new Error(err);
					}
				});
				
			} catch (reason) {
				console.log("An error ocurred");
				reject(reason);
			}
		});
	}

	public authPut(method:string, body:any):Observable<any>{
		return this.authHttp.put(this.baseUrl + method, body);
	}

	public authDelete(method: string):Observable<any>{
		return this.authHttp.delete(this.baseUrl + method);
	}

	public authConnect():SocketIO{
		try {
			this.socket = new SocketIO(this.baseConnection, {
				query: {token: sessionStorage.getItem('token')}
			});
			return this.socket;
		}catch (error){
			console.log("Socket error :: ", error);
		}
	}


	/**
	 * Full Commited requests
	 */
	public async fullUrlGet(url:string):Promise<any>{
		return new Promise((resolve, reject) => {
			$.getJSON(url, (data) => {resolve(data);}, (error) => { reject(error); });
		});
	}

	public async anyoriginGet(baseUrl:string):Promise<any>{
		let url = `http://anyorigin.com/go?url=${encodeURIComponent(baseUrl)}&callback=?`;
		return new Promise((resolve, reject) => {
			$.getJSON(url, (data) => {resolve(data.contents);}, (error) => { reject(error); });
		});
	}
}
