import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;
    let http: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(ApiService);
        http = TestBed.inject(HttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('deve chamar o getPokedex', () => {
        const spy = spyOn(http, 'get').and.callThrough();
        service.getPokedex();
        expect(spy).toHaveBeenCalledOnceWith('http://localhost:8000/pokemon');
    });

    it('deve chamar o buscarPokemon', () => {
        let expectedParams = new HttpParams();
        expectedParams = expectedParams.append('pokemon', 'charmander');

        const spy = spyOn(http, 'get').and.callThrough();
        service.buscarPokemon('charmander');
        expect(spy).toHaveBeenCalledOnceWith('http://localhost:8000/pokemon', { params: expectedParams  });
    });

    it('deve chamar o mudarLista', () => {
        let expectedParams = new HttpParams();
        expectedParams = expectedParams.append('url', 'http://urlaleatoria');

        const spy = spyOn(http, 'get').and.callThrough();
        service.mudarLista('http://urlaleatoria');
        expect(spy).toHaveBeenCalledOnceWith('http://localhost:8000/pokemon', { params: expectedParams });
    });
});