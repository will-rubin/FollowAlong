
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsers, type User } from "../model/users";
import { loadScript } from '../model/myFetch'

const users = ref<User[]>([])
const mapDiv = ref(null)

function initMap() {

    await loadScript("https://maps.googleapis.com/maps/api/js?key=" + import.meta.env.VITE_GOOGLE_API_KEY, "google-maps");
    const address = "New Paltz, NY"
    const geocoder = new google.maps.geocoder
    const place = await new Promise((resolve, reject)) => {
        geocoder.geocode({ address }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results?.length) {
                resolve(results[0].geometry.location)
            } else {
                reject(status)
            }
        })
    }

    const map = new google.maps.Map(mapDiv.value {
        zoom: 10,
        center: place[0].geometry.location,
    });

    setMarkers(map);

}




function setMarkers(map) {
    users
    for (let i = 0; i < beaches.length; i++) {
        const beach = beaches[i];

        new google.maps.Marker({
            position: users.address?.coordinates,   
            map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3],
        });
    }
}

onMounted(() =>
    initMap()
)

</script>


<template>
    <div ref="mapDiv">

    </div>
</template>

<style scoped></style>