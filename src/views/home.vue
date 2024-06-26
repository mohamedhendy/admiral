<template>
  <main>
    <div class="container">
      <LayoutTitleDescription name="leaderboard" title="RACE TO THE TOP" />
      <div class="row mb-5">
        <div class="col-lg mx-w-300">
          <p class="mb-5 home-prg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="col-lg mb-5" v-if="dataForMale">
          <h5 class="gender text-uppercase">men</h5>
          <LeaderBoardCard v-for="(item, index) in dataForMale.rankings.slice(0, 5)" :player="item" :key="index" />
        </div>
        <div class="col-lg mb-5" v-if="dataForFemale">
          <h5 class="gender text-uppercase">Women</h5>
          <LeaderBoardCard v-for="(item, index) in dataForFemale.rankings.slice(0, 5)" :player="item" :key="index" />
        </div>
      </div>
      <LayoutTitleDescription name="Results" title="RACE TO THE TOP" />
      <BaseButtonSwiper @type="handelResults" />
      <div class="py-5">
        <BaseTable :dataType="dataType" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
    import LayoutTitleDescription from '../components/LayoutTitleDescription.vue';
    import LeaderBoardCard from '../components/LeaderBoardCard.vue';
    import BaseButtonSwiper from '../components/BaseButtonSwiper.vue';
    import BaseTable from '../components/BaseTable.vue';
    import { useGetLeaderBoard } from '../use/players';
  import { ref } from 'vue';
    const {
      data: dataForMale,
      loading: loadingForMale, //  MSG to Admiral Team if I will make skeleton
      getLeaderBoard: getLeaderBoardForMail,
    } = useGetLeaderBoard('MPRO');
    const {
      data: dataForFemale,
      loading: loadingForFemale, //  MSG to Admiral Team if I will make skeleton
      getLeaderBoard,
    } = useGetLeaderBoard('FPRO');
    getLeaderBoardForMail();
    getLeaderBoard();
    const dataType = ref('men')
    const handelResults = (type: string) => {
      dataType.value = type
    }
</script>
<style lang="scss" scoped>
  main {
    padding: 1rem;
    @media (min-width: 992px) {
      padding: 2.5rem;
    }
  }
  @import url('https://fonts.cdnfonts.com/css/aktiv-grotesk-cd-trial');
  .home-prg {
    color: #404c63;
    font-family: 'Aktiv Grotesk Cd Trial', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;
  }
  .gender {
    font-family: 'Transducer Test Black';
    font-size: 24px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: -0.03em;
    text-align: left;
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    .mx-w-300 {
      max-width: 300px;
    }
  }
</style>
