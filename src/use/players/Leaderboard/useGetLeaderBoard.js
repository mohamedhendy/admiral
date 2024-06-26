import webServices from "../../../composables/webServices";
import {ref} from 'vue'
export default function (type) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const getLeaderBoard = async () => {
    loading.value = true;
    await webServices(import.meta.env.VITE_APP_LEADERBOARD_BASE_URL + type, {
      method: "GET",
    })
      .then(async (response) => {
        data.value = await response.json();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        loading.value = false;
      });
  };
  return { data, error, loading, getLeaderBoard };
}
