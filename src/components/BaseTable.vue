<template>
  <div class="table-container">
    <div class="py-3 d-md-flex align-items-center justify-content-between">
      <div class="cups d-flex align-items-center">
        <span class="d-flex align-items-center justify-content"><cup class="me-2" type="Gold" /> 1st place</span>
        <span class="mx-3 d-flex align-items-center justify-content"><cup class="me-2" type="Silver" /> 2st place</span>
        <span class="d-flex align-items-center justify-content"><cup class="me-2" type="Bronze" /> 3st place</span>
      </div>
      <div class="mt-3 mt-md-0">
        <div class="dropdown" v-if="data">
          <button
            class="btn-season dropdown-toggle d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>
              <span class="d-block label">Season</span>
              <span class="d-block year-label">2024</span>
            </span>
            <downArrow />
          </button>
          <ul class="dropdown-menu">
            <li v-for="item in data.t100_seasons" @click="getResults(`${data.division}?season=${item.id}`)">
              <span class="dropdown-item year-label p-3">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="overflow-auto">
      <table class="table" style="min-width: 1000px">
        <thead>
          <tr v-if="data">
            <th scope="col" class="text-start">
              <img src="/src/assets/images/logo.svg" alt="" />
            </th>
            <th v-for="item in data.races" scope="col" class="table__races" :key="item.id">
              {{ filterRaces(item.name) }}
            </th>

            <th scope="col" class="table__score">Score</th>
          </tr>
        </thead>
        <tbody v-if="data">
          <tr v-for="item in data.athletes" :key="item.id">
            <th scope="row" class="text-start name_tt">
              <span class="d-block first_name">{{ item.first }}</span>
              <span class="d-block last_name" style="font-size: 16px">{{ item.last }}</span>
            </th>

            <td v-for="race in data.races" :key="race.id">
              <BaseTableResultCell
                :value="RaceValue(item.resultsByRace, race.id)"
                :rank="RankValue(item.resultsByRace, race.id)"
                :is_qualifying_score="is_qualifying_score(item.resultsByRace, race.id)"
              />
            </td>
            <td>
              <span class="highlight-score">
                <span class="value">{{ item.score }}</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import cup from './icons/cup.vue';
  import downArrow from './icons/downArrow.vue';
  import BaseTableResultCell from './BaseTableResultCell.vue';
  import { useGetResults } from '../use/players';
  import { ref, watch } from 'vue';
  const props = defineProps({
    dataType: {
      type: String,
      default: 'men',
      required: true,
    },
  });
  const {
    data,
    loading, //  MSG to Admiral Team if I will make skeleton
    getResults,
  } = useGetResults();

  const filterRaces = (str) => {
    return str.replace(/\b(2024|T100)\b/gi, '');
  };
  const isExistRace = (array, id) => {
    return Object.keys(array).includes(String(id));
  };
  const RaceValue = (array, id) => {
    return isExistRace(array, id) ? array[id].t100_points : '0';
  };
  const RankValue = (array, id) => {
    return isExistRace(array, id) ? Number(array[id].overall_rank) : 0;
  };
  const is_qualifying_score = (array, id) => {
    return isExistRace(array, id) ? (array[id].is_qualifying_score ? true : false) : false;
  };

  getResults('men');
  watch(
    () => props.dataType,
    (val) => {
      getResults(val);
    }
  );
</script>

<style scoped lang="scss">
  .cups {
    font-family: 'Aktiv Grotesk Cd Trial', sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
  .label {
    font-family: 'Aktiv Grotesk Cd Trial', sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.01em;
    text-align: left;
  }
  .year-label {
    font-family: 'Transducer Test Black';
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    text-align: left;
  }
  .btn-season,
  .dropdown-menu {
    min-width: 300px;
    min-height: 61px;
    padding: 12px 16px;
    gap: 12px;
    border-radius: 4px;
    border: 0;
    opacity: 0px;
    background-color: #e5f7f7;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .dropdown-item {
    cursor: pointer;
  }
  .table-container {
    background-color: #f2f3f8;
    padding: 20px;
    border-radius: 10px;
  }
  .table > :not(caption) > * > * {
    background-color: #f2f3f8 !important;
    padding: 1.1rem;
  }
  tr {
    border-bottom: #8f9bb8;
  }
  .table {
    th {
      font-family: 'Aktiv Grotesk Cd Trial', sans-serif;
      font-size: 16px;
      font-weight: bold;
      line-height: 16px;
      text-align: center;
    }
    td {
      text-align: center;
      font-size: 16px;
      font-weight: 900;
      line-height: 16px;
      letter-spacing: 0.04em;
      vertical-align: baseline;
      .highlight-score {
        padding: 12px 16px 12px 16px;
        gap: 10px;
        border-radius: 8px;
        opacity: 0px;
        background-color: #02162d;
        .value {
          font-family: 'Transducer Test Black';
          font-size: 16px;
          font-weight: 900;
          line-height: 16px;
          letter-spacing: 0.04em;
          text-align: left;
          color: #00ffff;
        }
      }
    }
    .name_tt {
      font-family: 'Transducer Test Black';
      font-size: 12px;
      font-weight: 900;
      line-height: 20px;
      letter-spacing: -0.03em;
      text-align: left;
    }
    &__races {
      font-size: 14px;
    }
    &__score {
      font-size: 14px;
    }
  }
</style>
