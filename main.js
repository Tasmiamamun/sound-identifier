function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/de0qAWMOw/model.json",model_ready)
}



function model_ready(){
    classifier.classify(gotResult)
}



function gotResult(error,results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        

        document.getElementById("result_label").innerHTML="I can hear: "+results[0].label
        
        document.getElementById("result_accuracy").innerHTML="The accuracy is: "+(results[0].confidence*100).toFixed(1)+"% "


        img=document.getElementById("alien_1")
        img2=document.getElementById("alien_2")
        img3=document.getElementById("alien_3")
        img4=document.getElementById("alien_4")



        if (results[0].label=="clap") {
            img.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"

        } else if (results[0].label=="snap") {
            

            img.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
        }

        else if (results[0].label=="Background Noise") {
            

            img.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
        }




        else if (results[0].label=="bell") {
            

            img.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
        }

    }
}



