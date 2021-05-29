<template>
  <div class="container p-5">
    <div class="flashcard-card px-5 pt-4">
      <div class="face face1">
        <v-col lg="12">
          <v-row>
            <v-col cols="12" style="margin-top: -65px;">
              <v-rating
                color="warning"
                hover
                background-color="grey"
                length="5"
                size="23"
                :value="flashcard.status_id"
                @input="update(flashcard, $event)"
              />
            </v-col>
            <v-col cols="12">
              <div class="content">
                <p class="text-center h4">
                  {{ flashcard.front }}
                </p>
                <p v-if="flashcard.back === flashcard.second_side && flashcard.transcription" class="text-center transcription-top">
                  [{{ flashcard.transcription }}]
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </div>
      <div class="face face2">
        <div class="content">
          <p class="text-center h4">
            {{ flashcard.back }}
          </p>
          <p v-if="flashcard.back === flashcard.first_side && flashcard.transcription" class="text-center transcription-bot">
            [{{ flashcard.transcription }}]
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashcardSlider',
  props: {
    flashcard: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update (flashcard, status_id) {
      this.$axios.put(`/api/flashcards/${flashcard.id}`, { status_id }).then(() => {
        this.$notifier.success()
      })
    },
  },
}
</script>

<style scoped>
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

.container .flashcard-card:hover .face.face1{
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

.container .flashcard-card:hover .face.face1 .content{
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

.container .flashcard-card:hover .face.face2{
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

.container .flashcard-card .face.face2 .content a:hover{
  background: #333;
  color: #fff;
}

.transcription-top {
  color: #ded7d7;
}

.transcription-bot {
  color: gray;
}
</style>
