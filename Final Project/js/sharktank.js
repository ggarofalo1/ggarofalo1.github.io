if ( WEBGL.isWebGLAvailable() === false ) {
    document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
// Three.js Globals
var camera, controls, scene, renderer, hemiLight, sound;
var textureCube;
var cubeMesh;

// Objects
var shark;
var babyShark;
var turtle = new Array(80);
var bluewhale;
var fish1,fish2,fish3,fish4,fish5;
var coral;
var sh;
var beta,sub,whale;
var fish = new Array(50);
var change = 0;
var q = 1;
var flip= 0;


init();
//render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();

function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
    object.rotateX(THREE.Math.degToRad(degreeX));
    object.rotateY(THREE.Math.degToRad(degreeY));
    object.rotateZ(THREE.Math.degToRad(degreeZ));
}

function loadShark() {
    let loader = new THREE.ObjectLoader();
    loader.load("../models/shark.json", function(object){
        var geometry = object.geometry;
        var texture = new THREE.TextureLoader().load( '../models/shark65.jpg' );
        // use the texture for material creation
        var material = new THREE.MeshPhongMaterial( { map: texture } );
        shark = new THREE.Mesh( geometry, material );
        shark.scale.set(50.0,50.0,50.0);

        scene.add(shark);
        console.log("Shark loaded");
    });
}

function loadBabyShark() {
    let loader = new THREE.ObjectLoader();
    loader.load("../models/shark.json", function(object){
        var geometry = object.geometry;
        var texture = new THREE.TextureLoader().load( '../models/shark_body.png' );
        // use the texture for material creation
        var material = new THREE.MeshPhongMaterial( { map: texture } );
        babyShark = new THREE.Mesh( geometry, material );
        babyShark.scale.set(25.0,25.0,25.0);
        babyShark.translateX(100);

        scene.add(babyShark);
    });
}

function loadTurtle() {
    let loader = new THREE.ObjectLoader();
    loader.load("../models/Turtle.json", function(object){
        var geometry = object.geometry;
        var texture = new THREE.TextureLoader().load( '../models/Turtle.jpg' );
        // use the texture for material creation
        var material = new THREE.MeshPhongMaterial( { map: texture } );
        turtle = new THREE.Mesh( geometry, material );
        for(var i = 0;i<80;i++){
            turtle[i] = new THREE.Mesh( geometry, material );
            turtle[i].scale.set(1.5,1.5,1.5);
            if(i%2 == 0) {
                turtle[i].translateY(i * -150);
            }
            else{
                turtle[i].translateY(i * 150);
            }
            if(i%3 == 0) {
                turtle[i].translateX(i * 250)
            }
            else{
                turtle[i].translateX(i * -150)
            }
            if(i%3 == 0) {
                turtle[i].translateZ(i * 150)
            }
            else{
                turtle[i].translateZ(i * -150)
            }
            turtle[i].rotateX(-1.5);
            turtle[i].rotateZ(i)
            scene.add(turtle[i]);
        }


    });
}
function loadbeta() {
    let loader = new THREE.ObjectLoader();
    loader.load("../models/beta.json", function(object){
        var geometry = object.geometry;
        var texture = new THREE.TextureLoader().load( '../models/boat.png' );
        // use the texture for material creation
        var material = new THREE.MeshPhongMaterial( { map: texture } );
        beta = new THREE.Mesh( geometry, material );
        beta.scale.set(1000,1000,1000);
        beta.translateY(-250);
        beta.rotateX(-1.5);
        scene.add(beta);
    });
}

function loadBlueWhale() {
    let loader = new THREE.ObjectLoader();
    loader.load("../models/bluewhale.json", function(object){
        var geometry = object.geometry;
        var texture = new THREE.TextureLoader().load( '../models/BlueWhale.png' );
        // use the texture for material creation
        var material = new THREE.MeshPhongMaterial( { map: texture } );
        bluewhale = new THREE.Mesh( geometry, material );
        bluewhale.scale.set(2000,2000,2000);
        rotateObject(bluewhale, -90, 0, 0);
        bluewhale.translateY(1000);
        bluewhale.translateX(500);
        bluewhale.translateZ(1500);
        scene.add(bluewhale);

    });
}

function loadfish() {
    let loader = new THREE.ObjectLoader();
    loader.load("../models/fish.json", function(object){
        var geometry = object.geometry;
        var texture = new THREE.TextureLoader().load( '../models/fishskin.png' );
        // use the texture for material creation
        var material = new THREE.MeshPhongMaterial( { map: texture } );
        fish1 = new THREE.Mesh( geometry, material );
        fish1.scale.set(10,10,10);
        fish1.translateY(35);
        fish1.translateZ(10);
        fish1.translateX(-15);

        fish2 = new THREE.Mesh( geometry, material );
        fish2.scale.set(10,10,10);
        fish2.translateY(-35);

        fish3 = new THREE.Mesh( geometry, material );
        fish3.scale.set(10,10,10);
        fish3.translateY(10);
        fish3.translateZ(35);

        fish4 = new THREE.Mesh( geometry, material );
        fish4.scale.set(10,10,10);
        fish4.translateY(50);
        fish4.translateX(35);

        fish5 = new THREE.Mesh( geometry, material );
        fish5.scale.set(10,10,10);
        for(var i = 0;i<30;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY(i*-30);
            fish[i].translateZ(i*30);
            fish[i].translateX(i*30);
            fish[i].rotateY(i*7);
            scene.add(fish[i]);
        }

        for(i = 100;i< 150;i++){
                fish[i] = new THREE.Mesh( geometry, material );
                fish[i].scale.set(10,10,10);
                fish[i].translateY((i-125)*30);
                fish[i].translateX(i*5 );
                fish[i].rotateY(i*2);
                scene.add(fish[i]);
        }
        for( i = 150;i< 200;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-175)*30);
            fish[i].translateZ(i*5 );
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }
        for(i = 200;i< 250;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-225)*30);
            fish[i].translateX(i*-5 );
            fish[i].translateZ(300);
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }
        for( i = 250;i< 300;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-275)*30);
            fish[i].translateZ(i*-5 );
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }

        for( i = 300;i< 350;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-325)*30);
            fish[i].translateX(i*-5 );
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }
        for( i = 350;i< 400;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-375)*30);
            fish[i].translateZ(i*5 );
            fish[i].translateX(i*5 );
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }
        for( i = 400;i< 450;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-425)*30);
            fish[i].translateX(i*-5 );
            fish[i].translateZ(-300);
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }
        for( i = 450;i< 500;i++){
            fish[i] = new THREE.Mesh( geometry, material );
            fish[i].scale.set(10,10,10);
            fish[i].translateY((i-425)*30);
            fish[i].translateX( 5);
            fish[i].translateZ(i* 5);
            fish[i].rotateY(i*2);
            scene.add(fish[i]);
        }



        //turtle.rotateX(-1.5);
        scene.add(fish1,fish2,fish3,fish4,fish5);
    });
}



function init() {

    // Scence
    scene = new THREE.Scene();

    // scene.background = new THREE.Color( 0xcccccc );
    scene.fog = new THREE.FogExp2( 0x0d153f, 0.001 );

    // Renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Camera
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.set( 400, 200, 0 );

    //Sound
    var listener = new THREE.AudioListener();
    camera.add( listener );

    sound = new THREE.Audio( listener );

    var audioLoader = new THREE.AudioLoader();
    audioLoader.load( '../sounds/ambi.wav', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 0.5 );
        sound.play();
    });

    // Controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    // World
    var geometry = new THREE.CylinderBufferGeometry( 0, 10, 30, 4, 1 );

    // Lights
    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    light.position.set(0, 2500, 0);
    scene.add( light );

    light = new THREE.HemisphereLight( 0x0c0c0c, 0x080820, 2 );
    light.position.set(0, 4000, 0);
    scene.add(light);

    window.addEventListener( 'resize', onWindowResize, false );

    // Skybox
    var r = "../images/skybox/";
    // var urls = [ r + "posx.jpg", r + "negx.jpg",
    //     r + "posy.jpg", r + "negy.jpg",
    //     r + "posz.jpg", r + "negz.jpg" ];
    var urls = [ r + "posx.jpg", r + "negx.jpg",
                 r + "posy.jpg", r + "negy.jpg",
                 r + "posz.jpg", r + "negz.jpg" ];
    textureCube = new THREE.CubeTextureLoader().load( urls );
    textureCube.format = THREE.RGBFormat;
    textureCube.mapping = THREE.CubeReflectionMapping;
    textureCube.encoding = THREE.sRGBEncoding;

    var cubeShader = THREE.ShaderLib[ "cube" ];
    var cubeMaterial = new THREE.ShaderMaterial( {
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        uniforms: cubeShader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    } );

    cubeMaterial.uniforms[ "tCube" ].value = textureCube;
    Object.defineProperty( cubeMaterial, 'map', {
        get: function () {
            return this.uniforms.tCube.value;
        }
    } );

    cubeMesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 5000, 5000, 5000 ), cubeMaterial );
    scene.add( cubeMesh );


    // add Objects
    loadBlueWhale();
    loadShark();
    loadBabyShark();
    loadTurtle();
    loadfish();
    loadbeta();

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame( animate );
for(var k = 0;k<80;k++) {
    turtle[k].translateX(1.3);
    turtle[k].rotateZ(.005);

}

    fish1.translateX(1);
    fish1.translateZ(1);
    fish2.translateX(1);
    fish2.translateZ(1);
    fish3.translateX(1);
    fish3.translateZ(1);
    fish4.translateX(1);
    fish4.translateZ(1);
    fish5.translateX(1);
    fish5.translateZ(1);
    fish1.rotateZ(.005);
    fish2.rotateZ(.005);
    fish3.rotateZ(.005);
    fish4.rotateZ(.005);
    fish5.rotateZ(.005);
    if(change<=100000) {
        for (var j = 0; j < 30; j++) {
            fish[j].translateX(q*.5);
            fish[j].translateZ(q*.5)
            change++;
            //fish[j].rotateY(.005);

            if(change === 100000){
                change = 0;
                if(q === 1) {
                    q = -1;
                    for(var y = 0;y<30;y++) {
                        fish[y].rotateY(180);
                    }
                }
                else{
                    q = 1;
                }
            }
        }
    }

    for(var i = 100;i< 500;i++){
        if(flip <20){
            if(i%2 === 0){
                fish[i].translateX( 1);
                fish[i].translateZ( 1);
                fish[i].rotateY( .0001);

            }
            if(i%2 !== 0) {
                fish[i].translateX( 1);
                fish[i].translateZ( 1);
            }
        }else{
            if(i%2 === 0){
                fish[i].translateX( 1);
                fish[i].translateZ( 1);
            }
            if(i%2 !== 0){
                fish[i].translateX( 1);
                fish[i].translateZ( 1);
                fish[i].rotateY( .0001);
            }
            if(flip > 40){
                flip =0;
            }
        }
    }
    flip++;


    // turtle.translateY(3);
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    render();
}

function render() {
    renderer.render( scene, camera ); // for normal scene
}