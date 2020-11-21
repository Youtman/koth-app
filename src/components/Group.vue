<template>
  <div>
    <section class="container group">
      <div class="mb-4">
        <h2>ADD GROUP</h2>
      </div>
      <form action="#">
        <div class="form-group mb-4">
          <input
            type="text"
            class="form-control"
            id="team-name"
            aria-describedby="team-name"
            placeholder="Name of team"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Group',
  props: {},
};
</script>

<style lang="css" scoped>
.group {
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
