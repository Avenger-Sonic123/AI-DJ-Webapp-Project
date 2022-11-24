song1 = "";
song2 = "";
song1status = "";
song2status = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
scoreLeftWrist = 0; 
scoreRightWrist = 0; 
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

    song1.play();
    song1.rate(1);
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet has been Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill("red");
    stroke("red");

    song1status = song1.isPlaying();
    song2status = song2.isPlaying();
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song2.stop()
        if(song1status == false)
        {
            song1.play();
            document.getElementById("song_name").innerHTML = "Harry Potter Remix";
        }
    }

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song1.stop()
        if(song2status == false)
        {
            song2.play();
            document.getElementById("song_name").innerHTML = "Peter Pan";
        }
    }
   
   
   
}

function gotPoses(results)
{
    if(results.length > 0)
    {

        scoreLeftWrist = results[0].pose.keypoints[9].score;
       // scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Score for Left Wrist is " + scoreLeftWrist) //+ ", Score for Right Wrist is " + scoreRightWrist);
        
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;

        console.log(leftWristX);

        leftWristY = results[0].pose.leftWrist.y;

        console.log(leftWristY);

       // rightWristX = results[0].pose.rightWrist.x;

       // console.log(rightWristX);

        //rightWristY = results[0].pose.rightWrist.y;

       // console.log(rightWristY);
    }
}
