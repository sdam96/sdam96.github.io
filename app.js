document.getElementById('alertButton').addEventListener('click', function(){
    alert('Click!')
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
        this.navigator.serviceWorker.register('/sw.js').then(function(registration){
            console.log('Service worker iniciado', registration.scope)
        }, function(err) {
            console.log('Error', err)
        })
    })
}