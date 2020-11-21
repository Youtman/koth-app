<template>
  <div>
    <section class="container team">
      <div>
        <h2>ADD TEAM</h2>
      </div>
      <form action="#">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="team-name"
            aria-describedby="team-name"
            placeholder="Name of team"
          />
        </div>
        <div class="form-row align-items-center my-4">
          <div class="col-auto my-1">
            <select
              class="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Choose Group</option>
              <option value="1">Group A</option>
              <option value="2">Group B</option>
              <option value="3">Group C</option>
              <option value="4">Group D</option>
              <option value="5">Group E</option>
              <option value="6">Group F</option>
              <option value="7">Group G</option>
              <option value="8">Group H</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Team',
  props: {},
};
</script>

<style lang="css" scoped>
.team {
  max-width: 500px;
  margin: auto;
}
h2 {
  text-align: center;
}
.btn {
  width: 100%;
}
</style>
