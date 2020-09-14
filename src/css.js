const string = `/*送你一只大白，他会说:balalala*/
#baymax{
    position: absolute;
    left: 75%;
    top: 20%;
}

#baymax .head{
    position: relative;
    z-index: 10;
    transform:translateZ(50px);
    width: 90px;
    height: 60px;
    border-radius: 50%;
    margin: auto;
    background: white;
    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, 
                0 5px 15px rgba(23, 34, 45, 0.2);
}
#baymax .eye{
    position: absolute;
    margin-top: -4px;
    top: 40%;
    left: 50%;
    width: 8px;
    height: 9px;
    border-radius: 50%;
    background: #202b36;
    animation: blink 5s ease-in-out infinite
}
@keyframes blink{
  0%{
    transform: scale( 1 , 1 )
  }
  49%{
    transform: scale( 1 , 1 )
  }
  50%{
    transform: scale( 1 , 0.1 )
  }
  51%{
    transform: scale( 1 , 1 )
  }
  60%{
    transform: scale( 1 , 1 )
  }
  61%{
    transform: scale( 1 , 0.1 )
  }
  62%{
    transform: scale( 1 , 1 )
  }
  100%{
    transform: scale( 1 , 1 )
  }
}

#baymax .left{
    margin-left: -27px;
}
#baymax .right{
    margin-left: 19px;
}
#baymax .mouth{
    position: absolute;
    width: 38px;
    height: 1px;
    background: #202b36;
    top: 40%;
    left: 50%;
    margin-left: -19px;
}

.body{
    position: relative;
}
.body .chest{
    position: absolute;
    width: 190px;
    height: 260px;
    left: 50%;
    margin-left: -95px;
    background: rgba(255,255,255);
    border-radius: 50%;
    margin-top: -20px;
    z-index: 3;
}
.body .chest > i{
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    right: 30px;
    top: 62px;
    background: rgb(255,255,255);
    box-shadow: 0 -5px 8px rgba(23, 34, 45, 0.15) inset, 2px 3px 2px rgba(23, 34, 45, 0.05);
}
.body .chest > i:before{
    position:absolute;
    content: "";
    width: 75%;
    height: 65%;
    top: 15%;
    left: 13%;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 0 5px 8px rgba(23, 34, 45, 0.08) inset;

}
.body .belly{
    z-index: 1;
    position: absolute;
    width: 240px;
    height: 310px;
    left: 50%;
    margin-left: -120px;
    border-radius: 50%;
    background: rgba(255,255,255);
    margin-top: -7px;
    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, 
                0 5px 15px rgba(23, 34, 45, 0.2);
}
.body .arm{
    position:absolute;
}
.body .arm:before,
.body .arm:after{
    content: "";
    position: absolute;
}
.body .arm:before{
    border-radius: 50%;
    width: 90px;
    height: 200px;
    background: rgba(255,255,255);
}
.body .arm.left:before{
    left: 50%;
    margin-left: -17px;
    margin-top: 18px;
    transform-origin: top center;
    transform: rotate(27deg);
}
.body .arm.right:before{
    left: 50%;
    margin-left: 20px;
    margin-top: 15px;
    transform-origin: top center;
    transform: rotate(-27deg);
}
.body .arm:after{
    width: 80px;
    height: 150px;
    background: rgba(255,255,255);
    border-radius: 50%;
    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, 
                0 5px 15px rgba(23, 34, 45, 0.2);
}
.body .left.arm:after{
    margin-left: -86px;
    margin-top: 97px;
    transform: rotate(-7deg);
    transform-origin: top center;
}
.body .right.arm:after{
    margin-left: 101px;
    margin-top: 97px;
    transform: rotate(7deg);
    transform-origin: top center;
}

.body .arm .fingers{
    position: absolute;
}
.body .arm .fingers:before,
.body .arm .fingers:after{
    content: "";
    position: absolute;
    background: rgba(255,255,255);
    box-shadow: 0 -15px 30px rgba(23, 34, 45, 0.2) inset, 
                0 5px 15px rgba(23, 34, 45, 0.2);
    border-radius: 50%;
    width: 18px;
    height: 40px;
    transform-origin: top center;
}
.body .arm.left .fingers:before{  
    margin-left: -58px;
    margin-top: 222px;
    transform: rotate(-27deg);
    z-index: 2;
}
.body .arm.right .fingers:before{
    margin-left: 138px;
    margin-top: 220px;
    transform: rotate(22deg);
    z-index: 2;
}
.body .arm.left .fingers:after{
    margin-left: -25px;
    margin-top: 218px;
    transform: rotate(4deg);
}
.body .arm.right .fingers:after{
    margin-left: 107px;
    margin-top: 218px;
    transform: rotate(-4deg);
}
#baymax .leg{
    position: absolute;
    width: 50px;
    height: 160px;
    background: rgba(255,255,255);
    top: 250px;
}
#baymax .leg.left{
    margin-left: 0;
    border-bottom-right-radius: 15px;
    box-shadow: -7px -6px 7px rgba(23, 34, 45, 0.1) inset;
}
#baymax .leg.right{
    margin-left: 50px;
    border-bottom-left-radius: 15px;
    box-shadow: 7px -6px 7px rgba(23, 34, 45, 0.1) inset;
}
#baymax .leg:before{
    content: "";
    position: absolute;
    width: 25px;
    height: 100%;
    background-color: white;
}
#baymax .leg.left:before{
    border-bottom-left-radius: 103%;
    margin-left: -25px;
    box-shadow: 7px 15px 7px rgba(23, 34, 45, 0.4) inset;
}
#baymax .leg.right:before{
    border-bottom-right-radius: 103%;
    margin-left: 50px;
    box-shadow: -7px 15px 7px rgba(23, 34, 45, 0.4) inset;
}
/*画完了，让他保护你吧❤*/
`

export default string;