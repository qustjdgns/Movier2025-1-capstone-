let MovieObject = {
    init: function() {
        // 초기화 코드 (필요 시 추가)
    },

    getall: function() {
        $.ajax({
            // 실행 코드
            type: "GET",
            url: "http://localhost:8000/all",
        }).done(function(response) {
            // 성공

            movielist = response.result

            topdiv = document.getElementById("alldiv")

            movielist.forEach(movie => {
                cmovie = document.createElement("div")
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function() {
                    window.open(movie.url)
                }

                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer"
                }

                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            })
        }).fail(function(error) {
            // 실패
            console.log(error)
        })
    },

    getgenres: function() {
        // 장르 선택을 정확히 가져오기 위해 수정
        genre = document.getElementById("sgenre").value.toLowerCase() // ID 수정
        $.ajax({
            // 실행 코드
            type: "GET",
            url: "http://localhost:8000/genresbest/" + genre,
        }).done(function(response) {
            // 성공
            console.log(response)
            movielist = response.result

            topdiv = document.getElementById("genrediv")
            while(topdiv.firstChild)
                topdiv.removeChild(topdiv.firstChild) // 기존 영화 리스트 지우기

            movielist.forEach(movie => {
                cmovie = document.createElement("div")
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick = function() {
                    window.open(movie.url)
                }

                mimg.onmouseover = function(){
                    mimg.style.cursor = "pointer"
                }

                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            })
        }).fail(function(error) {
            // 실패
            console.log(error)
        })
    }
}

// 객체의 초기화와 영화 목록 가져오기 호출
MovieObject.init();
MovieObject.getall();
