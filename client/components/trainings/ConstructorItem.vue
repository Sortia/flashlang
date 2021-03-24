<template>
  <div class="container p-5">
    <div class="flashcard-card px-5 pt-4">
      <v-btn elevation="8" class="flashcard-hint" @click="$set(blocked, hint().index, true); $set(answer, answer.indexOf(null), hint().letter)">
        <v-icon large>
          mdi-help
        </v-icon>
      </v-btn>
      <div class="face face1">
        <div class="content">
          <v-row>
            <v-col cols="12">
              <p class="text-center h4">
                {{ flashcard.front }}
              </p>
            </v-col>
          </v-row>
          <div class="row justify-content-center mb-4">
            <v-card
              v-for="(letter, index) in answer"
              :key="index"
              color="#229288"
              class="card-letter m-2"
              @click="$set(answer, index, null); $set(blocked, letters.indexOf(letter), null)"
            >
              <v-card-title class="text-center d-block">
                {{ letter }}
              </v-card-title>
            </v-card>
          </div>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <div class="container">
            <div class="row justify-content-center mb-4">
              <v-card
                v-for="(letter, index) in letters"
                :key="index"
                :disabled="blocked[index]"
                color="#1e75b9"
                class="card-letter m-2"
                @click="$set(blocked, index, true); $set(answer, answer.indexOf(null), letter)"
              >
                <v-card-title class="text-center d-block">
                  {{ letter }}
                </v-card-title>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConstructorItem',
  props: {
    flashcard: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      answer: [],
      blocked: [],
      letters: [],
    }
  },
  watch: {
    answer () {
      if (!this.answer.includes(null))
        if (this.answer.join('') === this.flashcard.back)
          this.$emit('right')
        else {
          this.answer = this.answer.map(() => null)
          this.blocked = this.answer.map(() => null)
        }
    },
  },
  mounted () {
    this.answer = this.flashcard.back.split('').map(() => null)
    this.letters = this.flashcard.back.split('').sort(() => Math.random() > 0.5 ? -1 : 1)
  },
  methods: {
    hint () {
      const letter = this.flashcard.back.substr(this.answer.indexOf(null), 1)
      const index = this.letters.findIndex(item => item === letter)

      return { index, letter }
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

.card-letter {
  width: 65px;
  height: 65px;
  color: white;
}

.letter {
  font-size: 24px !important;
  align-items: flex-start;
}
</style>
