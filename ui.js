class UI {
    static addFilmToUI(newFilm){
        /*
        <!-- <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> -->
        */
    
        const filmList = document.getElementById("films");
        
        // sadece eşittir kullanırsak önceden bu innerhtml de olan bilgiler silinecek
        // o yüzden bizim += kullanmamız gerekir önckei verinin üzerine yazmak için
    
        filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> 
        `;
    }
    
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    
    static displayMessage(message,type){
        const cardbody = document.querySelector(".card-body");
    
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        cardbody.appendChild(div);
    
        setTimeout(function(){
            div.remove();
        },3000);
    }
    
    static loadAllFilms(films){
        
        const filmList = document.getElementById("films");
    
        films.forEach(function(film){
            filmList.innerHTML += ` <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr> `
        });
    }
    
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");
    
        while (filmList.firstElementChild !== null) { // Cocuk olduğu sürece
            filmList.firstElementChild.remove();
        
        }
    }
}

