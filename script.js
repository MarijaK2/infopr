// Dohvatite sva dugmad sa ID-om "dugme"
var dugmad = document.querySelectorAll("#dugme");

// Iterirajte kroz sva dugmad i dodajte event listener
dugmad.forEach(function(dugme) {
  dugme.addEventListener("click", function() {
    console.log("Korisnik je pritisnuo dugme i otvorio novu stranicu");
  });
});
