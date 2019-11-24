<template>
  <div class="mainBg">
    <div class="Home container blueBorder">
      <div class="gridBG"></div>
      <h1 class="h1_headerBG">Hearing - X hearing test</h1>
      <div class="step1">
        <div class="infoBlob">
          Thank you for trying our Hear-X application.<br/>
          Click on the start button to begin downloading the sound files.         
        </div>
        <div class="Progressbar" id="progress">
          <div id="bar">{{ progressPercentage }}%</div>
        </div>
        <button @click="downloadFiles()" class="squareButton startB">Start</button>
        <button @click="displayCaptureForm()" class="squareButton continueB" >Continue</button>        
      </div>
      
      <div class="captureForm  infoBlob">
        <h2>Pease fill in your first name and email address</h2>
        <form @submit.prevent="submit">
          <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
            <div><label>First Name</label></div>
            <input class="form__input" v-model="name" placeholder="Your first name" v-model.trim="name" @input="setName($event.target.value)" title="first name"/>
          </div>
          <div class="error" v-if="!$v.name.required">Field is required</div>
          <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

          <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <div><label>Email</label></div>            
            <input class="form__input" v-model="email" placeholder="your@email.com" @input="setEmail($event.target.value)" title="name@email.com"/>
          </div>
          <div class="error" v-if="!$v.email.required">Field is required</div>
          <div class="error" v-if="!$v.email.minLength">Your email must have at least {{$v.email.$params.minLength.min}} characters.</div>
          <div class="error" v-if="!$v.email.email">Not a valid email address.</div>

          <button class="squareButton" type="submit" :disabled="$v.$invalid">Next</button>
          <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Saving...</p>
        </form>
      </div>  

      <div class="soundTest ">
        <div class="infoBlob">
          <h2>Volume Test</h2>
          <p>We will be performing a quick volume test. Please click on the play button and adjust the volume according to you prefrence. When you are ready, click on the continue button below</p>
          <div class="volumeControl">
            <audio controls>
              <source src="../../static/sound_files/test.wav" type="audio/wav">
            </audio>
          </div>        
        </div>     
        <div class="soundTestButton squareButton" @click="continueSoundTest()">Continue</div> 
      </div>           

      <div class="testInstructions infoBlob">
        <h2>Please read the following test procedures carfully</h2>
        <ul>
          <li>Place headpones over ears and be sure that they are plugged into your device.</li>
          <li>When the test procedure starts you will be hearing diffrent sound frequencies in each ear.</li>
          <li>When you hear a sound, click on the big button.</li>
          <li>When you are ready, click on the button below to proceed.</li>
        </ul>    
      </div>

      <div class="step3">
        <button @click="startProcedure()" class="squareButton">READY</button>
      </div>

      <div class="step4">
        <button @click="logClicks()" class="bigTestButton play" disabled><img class="earIcon" src="../assets/images/ear.png" /></button>
      </div>

      <div class="step5 infoBlob" >
        <h2>Test Results</h2>       
        <div class="perc"></div>
        <div>{{name}}, according to your test results you are experiencing <span class="underline">{{result}}</span>.</div>
        <div class="severe">
          <h2>Severe Hearing Loss - Between 0% & 20%</h2>
          <p>Things are really going south now, someone with a severe loss will not be able to hear much below the 75 - 90 dB range. This means you won't be able to hear the TV, people talking, the phone ringing or most other everyday sounds. Again, as before, you may have a severe loss for some aspects of your hearing and a moerate or even mild in others.</p>
          <p>Most hearing aid manufacturers have a range or power hearing aids for this level of hearing loss. With some of the more basic hearing aids you would have to wear a full-ear mold, which some people find uncomfortable - higher-end hearing aids will still allow you to use a small in-the-ear receiver that is comfortable.</p>
          <p>This is the level of hearing loss I have, I basically cannot hear anything with my hearing aids, but with them I can do one-to-one conversations easily and still get along mostly fine in groups conversations - places with lots of background noise can be a problem but I still do OK. If you have this level of loss then there are hearing aids out there that can help you stay in the conversation.</p>
          <p>Lip-reading would be a very helpful skill to learn.</p>       
        </div>
        <div class="moderate">
          <h2>Moderate Hearing Loss - Between 21% & 50%</h2>
          <p>Sounds in the range of 40 - 75 dB are the quitest someone with a moderate loss will be able to hear, this level of hearing loss is going to have a major impact on your ability to hear in day-to-day environments as it is likely you will now struggle to follow conversation, even in quiet environments, you'll probably still pick up some words, or parts of words, but it it going to be hard work.</p>
          <p>There are many great hearing aids that will help with this level of hearing loss. I would recommend a bluetooth-enabled hearing aid so that you can stream TV, iPads, smartphones etc directly into your hearing aids.</p>
        </div>
        <div class="mild">
          <h2>Mild Hearing Loss - Between 51% & 80%</h2>
          <p>Someone with a mild hearing loss will not be able to hear sounds that are quieter than 25 - 45 dB. This means they will struggle to hear people whispering, won't hear the clock ticking, leaves rustling or the hum of electrical equipment. Normal everyday conversations may still be OK to hear in quiet environments but people may start to struggle more when there is more than one person talking or where there is background noise.</p>
          <p>Hearing aids that are fitted for a mild loss can be very small in-the-ear models or loose-fitting behind-the-ear models - these aids will often utilise the "good hearing" you still have and only amplify the sections of your hearing that have the mild loss.</p>
        </div>
        <div class="normal">
          <h2>Normal Hearing - Between 81% & 100%</h2>
          <p>The range for normal hearing is defined as hearing thresholds of -10 to 15 dB at all frequencies</p>
        </div>
        <div>We will be sending more information to the email address that you provided. ({{email}})</div>
      </div>
    </div> 
  </div>   
</template>
<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="../assets/js/progresscircle.js"></script>
<script>
		$('.circlechart').circlechart(); // Initialization
	</script>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import { required, minLength, email  } from 'vuelidate/lib/validators'
  import homeCSS from '../assets/css/home.css'  
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
 
  export default {
  name: 'Home', 
  components: {
   
  },
  data () {
    return {  
      result : '',  
      soundClick : 0,
      playTwice : 1,
      i: 0,
      name : '',
      email : '',
      submitStatus: null,
      soundAction: 'play',
      progressPercentage : 0,

      soundTestFile : {
        title: 'sound_test',
        loc: '../../static/sound_files/test.wav'
      },

      soundFiles: [
        {
          title: '1kHz_44100Hz_16bit_05sec',
          loc: '../../static/sound_files/1kHz_44100Hz_16bit_05sec.wav'
        },
        {
          title: '10kHz_44100Hz_16bit_05sec',
          loc: '../../static/sound_files/10kHz_44100Hz_16bit_05sec.wav'
        },
        {
          title: '100Hz_44100Hz_16bit_05sec',
          loc: '../../static/sound_files/100Hz_44100Hz_16bit_05sec.wav'
        },
        {
          title: '250Hz_44100Hz_16bit_05sec',
          loc: '../../static/sound_files/250Hz_44100Hz_16bit_05sec.wav'
        },
        {
          title: '440Hz_44100Hz_16bit_05sec',
          loc: '../../static/sound_files/440Hz_44100Hz_16bit_05sec.wav'
        }
      ]        
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      minLength: minLength(5),
      email
    }
  },
  methods: { 
    randomTime() {
      return Math.floor(Math.random() * (6000 - 3000)) + 3000;
    },  

    playSoundFiles(soundBite) {
      document.getElementsByClassName('play')[0].disabled = false
      var audio = new Audio(soundBite)
      audio.play()
      audio.addEventListener('timeupdate', function() {
        var t = audio.currentTime;   
        
        if (t > audio.duration - 4) {
          document.getElementsByClassName('play')[0].disabled = true          
          audio.pause();
          this.soundAction == 'pause'
        }           
      })        
    },

    continueSoundTest() {
      document.getElementsByClassName('step3')[0].style.display = 'block' 
      document.getElementsByClassName('testInstructions')[0].style.display = 'block'
      document.getElementsByClassName('soundTestButton')[0].style.display = 'none' 
      document.getElementsByClassName('soundTest')[0].style.display = 'none' 
    },

    playArrayOfSounds() {
      if(this.soundAction == 'play'){
        setTimeout(() => {                     
          this.playSoundFiles(this.soundFiles[this.i].loc) 
          this.soundAction == 'pause'

          if (this.playTwice == 2) {
            this.i++
            this.playTwice = 0
          }   
          this.playTwice++     

          if(this.i < this.soundFiles.length) {
            this.playArrayOfSounds()            
          }
          if(this.i == this.soundFiles.length) {
            setTimeout(() => {
              this.i = 0
              document.getElementsByClassName('step4')[0].style.display = 'none'
              document.getElementsByClassName('step5')[0].style.display = 'block'
              this.testResults()
            },2500)            
          }
        },this.randomTime())
      }         
    },

    testResults() {      
      switch (this.soundClick) {
        case 0 :
          this.result = "severe hearing loss"
          document.getElementsByClassName('severe')[0].style.display = 'block'
          break
        case 1 :
          this.result = "severe hearing loss"
          document.getElementsByClassName('severe')[0].style.display = 'block'
          break
        case 2 :
          this.result = "severe hearing loss"
          document.getElementsByClassName('severe')[0].style.display = 'block'
          break
        case 3 :
          this.result = "moderate hearing loss"
          document.getElementsByClassName('moderate')[0].style.display = 'block'
          break
        case 4 :
          this.result = "moderate hearing loss";
          document.getElementsByClassName('moderate')[0].style.display = 'block'
          break;
        case 5 :
          this.result = "moderate hearing loss";
          document.getElementsByClassName('moderate')[0].style.display = 'block'
          break;
        case 6 :
          this.result = "mild hearing loss";
          document.getElementsByClassName('mild')[0].style.display = 'block'
          break;
        case 7 :
          this.result = "mild hearing loss";
          document.getElementsByClassName('mild')[0].style.display = 'block'
          break;
        case 8 :
          this.result = "mild hearing loss";
          document.getElementsByClassName('mild')[0].style.display = 'block'
          break;
        case 9 :
          this.result = "normal hearing";
          document.getElementsByClassName('normal')[0].style.display = 'block'
          break;
        case 10 :
          this.result = "normal hearing";
          document.getElementsByClassName('normal')[0].style.display = 'block'
          break;
      }
    
      document.getElementsByClassName('perc')[0].innerHTML = (this.soundClick / 10) * 100 + "%"
    },

    logClicks() {
      this.soundClick++
    },

    startProcedure() {
      document.getElementsByClassName('step4')[0].style.display = 'block'
      document.getElementsByClassName('step3')[0].style.display = 'none'
      document.getElementsByClassName('testInstructions')[0].style.display = 'none'
      
      this.playArrayOfSounds()
    },

    displayCaptureForm() {
      document.getElementsByClassName('captureForm')[0].style.display = 'block' 
      document.getElementsByClassName('step1')[0].style.display = 'none'     
    },

    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'

      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          document.getElementsByClassName('soundTestButton')[0].style.display = 'inline-block' 
          document.getElementsByClassName('soundTest')[0].style.display = 'block' 
          document.getElementsByClassName('captureForm ')[0].style.display = 'none' 
        }, 1000)
      }
    },

    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },

    setEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },

    progressbar() {
      var elem = document.getElementById("progress")
      var widthIncrease = 10;
      var id = setInterval(frame, 20);
      function frame() {
        if (widthIncrease >= 100) {
          clearInterval(id);
        } else {
          widthIncrease++;
          elem.style.width = widthIncrease + "%"
          elem.innerHTML = widthIncrease + "%"
        }
      }
    },
    
    downloadFiles() {   
      document.getElementsByClassName('Progressbar')[0].style.display = 'block'
      document.getElementsByClassName('infoBlob')[0].innerHTML = 'After all the files have been downloaded, click on the continue button to start the test procedures.'                   
      document.getElementsByClassName('continueB')[0].style.display = 'inline-block'
      document.getElementsByClassName('startB')[0].style.display = 'none'
  
      var fileLink = document.createElement('a')
      document.body.appendChild(fileLink)

      var count = 0; 
      for( var n = 0; n < this.soundFiles.length; n++ ) {
        
        fileLink.setAttribute('href', this.soundFiles[n].loc)
        fileLink.setAttribute('download', this.soundFiles[n].title + '.wav')
        fileLink.click()

        this.progressbar()            
      }

      document.body.removeChild(fileLink)     
    }
  }
}

</script>

