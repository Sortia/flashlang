<template>
  <div class="container p-5">
    <div class="flashcard-card px-5 pt-4">
      <v-btn elevation="8" class="flashcard-hint" @click="$set(correct, hint(), !correct[hint()])">
        <v-icon large>
          mdi-help
        </v-icon>
      </v-btn>
      <div class="face face1">
        <v-row>
          <v-col cols="12" class="ml-3" style="position: absolute; top: 0">
            <v-rating
              color="warning"
              hover
              background-color="grey"
              length="5"
              size="23"
              :value="right.status_id"
              @input="update(right, $event)"
            />
          </v-col>
          <v-col cols="12">
            <div class="content">
              <p class="text-center h4">
                {{ right.front }}
              </p>
              <p v-if="right.front === right.first_side && right.transcription" class="text-center transcription-bot">
                [{{ right.transcription }}]
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="face face2">
        <div class="content">
          <div class="container">
            <v-row>
              <v-col v-for="(flashcard, index) in choices" :key="index" lg="6">
                <v-card class="border-0" elevation="15">
                  <v-btn width="100%" height="60px" :class="[fails[index] ? 'fail-button ' : 'default-button ', correct[index] ? 'right-button' : '']" @click="choose(flashcard) ? '' : $set(fails, index, !fails[index])">
                    <v-card-text class="txt-white">
                      <p class="text-center">
                        {{ flashcard.back }}
                      </p>
                      <p v-if="right.back === right.first_side && flashcard.transcription" class="text-center transcription-bot">
                        [{{ flashcard.transcription }}]
                      </p>
                    </v-card-text>
                  </v-btn>
                </v-card>
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
  name: 'ChooseItem',
  props: {
    choices: {
      type: Array,
      required: true,
    },
    right: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      fails: [ false, false, false, false ],
      correct: [ false, false, false, false ],
    }
  },
  mounted () {
    console.log(this.right)
  },
  methods: {
    choose (flashcard) {
      return flashcard.back === this.right.back ? this.$emit('right') : false
    },
    hint () {
      return this.choices.findIndex(item => item.id === this.right.id)
    },
    update (flashcard, status_id) {
      this.$axios.put(`/api/flashcards/${flashcard.id}`, { status_id }).then(() => {
        this.$notifier.success()
      })
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

.v-btn {
  text-transform: none;
}

.default-button {
  background-color: #47a0e6 !important;
}

.fail-button {
  background-color: #e85151 !important;
}

.right-button {
  background-color: #4eb972 !important;
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
