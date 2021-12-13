import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_Interceptor } from './jwt-interceptor';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from '../service/user.service';
import { RegistrationService } from '../service/registration.service';
import { newUser } from '../models/newUser';
import { environment } from 'src/environments/environment';

describe(`AuthHttpInterceptor`, () => {
	let service: RegistrationService;
	let httpMock: HttpTestingController;
	let user: newUser;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				RegistrationService,
				{
					provide: HTTP_INTERCEPTORS, useClass: JWT_Interceptor, multi: true,
					HttpClient
				},
			],
		});

		localStorage.setItem('Revatrade-LocalStorageLocation', 'test');
		service = TestBed.inject(RegistrationService);
		httpMock = TestBed.inject(HttpTestingController);
	});
	it('should add an Authorization header', () => {
		service.newUser(user).subscribe(response => {
			expect(response).toBeTruthy();
		});

		const httpRequest = httpMock.expectOne(environment.submitForm+"/user/new");

		expect(httpRequest.request.headers.has('Authorization')).toEqual(true);

		expect(httpRequest.request.headers.get('Authorization')).toBe('test')
	});
});
