  
    var countDownDate = new Date();
     countDownDate.setHours( countDownDate.getHours() + 1 );
    // Update the count down every 1 second
    var x = setInterval(function() {

      	
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("hours").innerHTML = zeroadd(hours);
      document.getElementById("mins").innerHTML = zeroadd(minutes);
      document.getElementById("seconds").innerHTML = zeroadd(seconds);
      document.getElementById("bar-fill").style.width = "70%";
	
      if(mins<50 && mins>30){
        document.getElementById("bar-fill").style.width = "50%";
      }else if(mins<30){
        document.getElementById("bar-fill").style.width = "30%";
      }
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("bar-fill").style.width = "0";
      }
    }, 1000);
    function zeroadd(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }
    Date.prototype.addHours= function(h){
        this.setHours(this.getHours()+h);
        return this;
    }
