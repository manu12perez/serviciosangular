import { Injectable } from "@angular/core";
import { Comic } from "../app/components/models/Comic";


@Injectable()
export class ServiceComics {
    getComics(): any {
        let comics = new Array<Comic>
        comics = [
            new Comic(
                "Spiderman",
                "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
                "Hombre araña"
            ),
            new Comic(
                "Wolverine",
                "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
                "Lobezno"
            ),
            new Comic(
                "Guardianes de la Galaxia",
                "https://tse3.mm.bing.net/th/id/OIP.Do8JzHDHufnDCrGCZQ8TKAAAAA?rs=1&pid=ImgDetMain",
                "Yo soy Groot"
            ),
            new Comic(
                "Avengers",
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                "Los Vengadores"
            ),
            new Comic(
                "Spawn",
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                "Todd MacFarlane"
            )
        ];
        return comics;
    }
}