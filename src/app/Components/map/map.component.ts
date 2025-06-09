// route-map.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
interface RouteLocation {
  lat: number;
  lng: number;
  address: string;
}
@Component({
  selector: 'app-map',
  template: `<div id="route-map" class="map-container"></div>`,
  styles: [`
    .map-container {
      height: 400px;
      width: 100%;
      margin-top: 20px;
    }
  `]
})
export class MapComponent implements OnChanges {
  private map!: L.Map;
  private routeLayer?: L.Polyline;
  private startMarker?: L.Marker;
  private endMarker?: L.Marker;

  @Input() start?: RouteLocation;
  @Input() end?: RouteLocation;

  ngOnChanges(changes: SimpleChanges) {
    if ((changes['start'] || changes['end']) && this.start && this.end) {
      this.initializeMap();
      this.updateRoute();
    } else if (this.start || this.end) {
      this.initializeMap();
      this.updateMarkers();
    }
  }

  private initializeMap() {
    if (!this.map) {
      this.map = L.map('route-map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(this.map);
    }
  }

  private updateMarkers() {
    this.clearExistingMarkers();

    if (this.start) {
      this.startMarker = L.marker([this.start.lat, this.start.lng], {
        icon: L.icon({
          iconUrl: 'assets/Icons/location-start.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })
      })
      .addTo(this.map)
      .bindPopup(`Start: ${this.start.address}`);
    }

    if (this.end) {
      this.endMarker = L.marker([this.end.lat, this.end.lng], {
        icon: L.icon({
          iconUrl: 'assets/Icons/location-end.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })
      })
      .addTo(this.map)
      .bindPopup(`End: ${this.end.address}`);
    }

    this.fitMapToBounds();
  }

  private updateRoute() {
    this.updateMarkers();
    this.clearExistingRoute();

    const start = `${this.start!.lng},${this.start!.lat}`;
    const end = `${this.end!.lng},${this.end!.lat}`;
    const url = `https://router.project-osrm.org/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        if (data.routes?.[0]?.geometry?.coordinates) {
          const coordinates = data.routes[0].geometry.coordinates
            .map(([lng, lat]: [number, number]) => [lat, lng] as [number, number]);

          this.routeLayer = L.polyline(coordinates, {
            color: '#FF5722',
            weight: 4,
            opacity: 0.7
          }).addTo(this.map);

          this.fitMapToBounds();
        }
      })
      .catch(error => {
        console.error('Error fetching route:', error);
      });
  }

  private clearExistingMarkers() {
    if (this.startMarker) this.map.removeLayer(this.startMarker);
    if (this.endMarker) this.map.removeLayer(this.endMarker);
  }

  private clearExistingRoute() {
    if (this.routeLayer) this.map.removeLayer(this.routeLayer);
  }

  private fitMapToBounds() {
    if (this.start && this.end) {
      const bounds = L.latLngBounds(
        [this.start.lat, this.start.lng],
        [this.end.lat, this.end.lng]
      );
      this.map.flyToBounds(bounds, {
        padding: [50, 50],
        animate: true,
        duration: 1
      });
    }
  }
}