<template>
  <div class="container p-5">
    <div class="flashcard-card px-5 pt-4">
      <v-btn elevation="8" class="flashcard-hint" @click="hint()">
        <v-icon large>
          mdi-help
        </v-icon>
      </v-btn>
      <div class="face face1">
        <div class="content">
          <p class="text-center h4">
            {{ flashcard.front }}
          </p>
        </div>
      </div>
      <div class="face face2">
        <div class="content w-100">
          <div class="container w-100">
            <v-row class="w-100">
              <v-col offset-sm="0" offset-md="3" sm="12" md="6">
                <v-text-field ref="input" v-model="text" autocomplete="off" @input="choose" />
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WritingItem',
  props: {
    flashcard: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      text: '',
    }
  },
  mounted () {
    setTimeout(() => this.$refs.input.focus(), 150)
  },
  methods: {
    choose () {
      if (this.flashcard.back === this.text)
        this.$emit('right')
    },
    hint () {
      this.choose()

      const textLength = this.text.length

      if (this.flashcard.back.substr(0, textLength) === this.text)
        this.text += this.flashcard.back.substr(textLength, 1)
      else
        this.text = this.flashcard.back.substr(0, 1)
    },
  },
}
</script>

<style scoped>

.flashcard-hint {
  right: 37px;
  top: 35px;
  position: absolute;
  z-index: 100;
  border-radius: 50%;
  background-color: #615f5f;
  min-width: 0 !important;
  padding: 0 !important;
}

.flashcard-hint i {
  color: #948e84 !important;
  font-size: 22px !important;
  padding: 7px 7px 7px 7px !important;
}

.container{
  width: 100%;
  max-width: 1100px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.container .flashcard-card{
  width: 100%;
  position: relative;
  cursor: pointer;
}

.container .flashcard-card .face{
  height: 350px;
  transition: 0.5s;
}

.container .flashcard-card .face.face1{
  position: relative;
  background: #444040;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(150px);
  color: white;
}

.container .flashcard-card .face.face1{
  background: #efbc55;

  transform: translateY(0);
}

.container .flashcard-card .face.face1 .content{
  padding: 40px;
  opacity: 0.9;
  transition: 0.5s;
}

.container .flashcard-card .face.face1 .content p{
  font-weight: 400;
}

.container .flashcard-card .face.face1 .content{
  opacity: 1;
}

.container .flashcard-card .face.face1 .content img{
  max-width: 100px;
}

.container .flashcard-card .face.face1 .content h3{
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.container .flashcard-card .face.face2{
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.8);
  transform: translateY(-200px);
  color: black !important;
}

.container .flashcard-card .face.face2{
  transform: translateY(0);
}

.container .flashcard-card .face.face2 .content p{
  margin: 0;
  padding: 0;
}

.container .flashcard-card .face.face2 .content a{
  margin: 15px 0 0;
  display:  inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.container .flashcard-card .face.face2 .content a{
  background: #333;
  color: #fff;
}
</style>
