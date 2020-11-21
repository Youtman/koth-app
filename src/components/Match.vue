<template>
  <div>
    <section class="container match">
      <div class="title">
        <h2>ADD MATCH</h2>
      </div>
      <form action="#">
        <div class="form-row align-items-center my-3">
          <div class="col-auto my-1">
            <select
              class="custom-select my-1 mr-sm-2 select"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Home Team</option>
              <option value="1">Team 1</option>
              <option value="2">Team 2</option>
              <option value="3">Team 3</option>
              <option value="4">Team 4</option>
              <option value="5">Team 5</option>
              <option value="6">Team 6</option>
              <option value="7">Team 7</option>
              <option value="8">Team 8</option>
            </select>
          </div>
        </div>
        <div class="form-row align-items-center my-3">
          <div class="col-auto my-1">
            <select
              class="custom-select my-1 mr-sm-2 select"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Away Team</option>
              <option value="1">Team 1</option>
              <option value="2">Team 2</option>
              <option value="3">Team 3</option>
              <option value="4">Team 4</option>
              <option value="5">Team 5</option>
              <option value="6">Team 6</option>
              <option value="7">Team 7</option>
              <option value="8">Team 8</option>
            </select>
          </div>
        </div>
      </form>
      <div class="date-picker my-3">
        <h3>Pick the Date</h3>
        <date-picker
          v-model="date"
          lang="en"
          type="date"
          format="DD-MM-YYYY"
          placeholder="Pick a Date"
        />
      </div>
      <div class="time-picker my-3">
        <h3>Pick the Time</h3>
        <date-picker
          v-model="time"
          lang="en"
          type="time"
          format="HH:mm a"
          placeholder="Select Time"
          :time-picker-options="timePickerOptions"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </section>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  name: 'Match',
  components: {
    DatePicker,
  },
  data() {
    return {
      date: '',
      time: '',
      timePickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:59',
      },
    };
  },
};
</script>

<style lang="css" scoped>
.match {
  max-width: 500px;
  margin: auto;
}
h2 {
  text-align: center;
}

.btn {
  width: 80%;
}
</style>
