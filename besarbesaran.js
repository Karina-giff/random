let x;
let y;

const t = document.getElementById("button")
        t.style.padding = '15px'
        t.style.fontSize = '20px'

function klikMe(){
        
        // const body = document.body
    // x = Math.floor(Math.random()* 10)+ 1
    y = Math.floor(Math.random()* 100)+ 1 

    //    let a = document.getElementById("xlabel").innerHTML = x
       let b = document.getElementById("ylabel").innerHTML = y 
                
                if ( b < 20) {
                    alert('SCP JIR')
                        let gambar = new Image(300, 300);
                        gambar.src = 'FB_IMG_1720325089494.jpg'
                        p = document.getElementById("picture")
                            p.appendChild(gambar)

                } else if (b < 50) {
                    alert('UPS')
                        let gambar1 = new Image(300, 300);
                        gambar1.src = 'FB_IMG_1721629538113.jpg'
                        q = document.getElementById("picture1")
                            q.appendChild(gambar1)
                       
                } else if (b < 60) {
                    alert('HEEHEHEHHE')
                        let gambar1 = new Image(300, 300);
                        gambar1.src = 'FB_IMG_1719886848830.jpg'
                        q = document.getElementById("picture1")
                            q.appendChild(gambar1)

                } else if (b < 80) {
                    alert('YOU A SIKMA HUMAN')
                        let gambar1 = new Image(300, 300);
                        gambar1.src = 'FB_IMG_1721360742580.jpg'
                        q = document.getElementById("picture1")
                            q.appendChild(gambar1)
                    
                } else if (b <= 100) {
                    alert('MAJU KESATRIA KEGELAPAN')
                        let gambar1 = new Image(300, 300);
                        gambar1.src = 'FB_IMG_1721275763130.jpg'
                        q = document.getElementById("picture1")
                            q.appendChild(gambar1)
                               
                }
            }

