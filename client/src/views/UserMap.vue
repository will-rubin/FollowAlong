
<script setup lang="ts">
import { ref, onMounted, useSSRContext } from 'vue';
import { getUsers } from "../model/users"

const users = ref

function initMap() {
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


const mapDiv = ref(null)

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const beaches = [
    ["Bondi Beach", -33.890542, 151.274856, 4],
    ["Coogee Beach", -33.923036, 151.259052, 5],
    ["Cronulla Beach", -34.028249, 151.157507, 3],
    ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
    ["Maroubra Beach", -33.950198, 151.259302, 1],
];

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
    <div id="map">

    </div>
</template>

<style scoped></style>