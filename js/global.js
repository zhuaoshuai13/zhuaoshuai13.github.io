console.log('aaas')
const a = document.querySelectorAll('.recent-post-item')
console.log(a)
const Wheight = window.innerHeight

window.onscroll = function(){
    for (let i = 0; i < a.length; i++) {
        if(a[i].getBoundingClientRect().top<Wheight-100){
            a[i].className = 'recent-post-item animate__zoomIn'
        }
    }
}

