---
template: dashboard
title: 'Event Coordination Dashboard'
description: 'Interactive map dashboard for tracking training events'
slug: '/dashboards/mapbox-demo'
---

# Event Coordination Dashboard

This interactive dashboard provides real-time visualization of training events across different locations.

## Features

- Real-time event tracking
- Interactive map interface
- Event details on click
- Filter by event type and date range
- Export functionality for event data

## Technologies Used

- Mapbox GL JS for mapping
- Cloudflare Workers for backend processing
- GeoJSON for geographic data
- JavaScript for interactivity

## How to Use

1. Pan and zoom the map to navigate to different locations
2. Click on event markers to view details
3. Use the filters to narrow down events
4. Export data for offline analysis

## Demo Access

This is a live demo - interact with the map below:

```html
<!-- Mapbox container will be inserted here -->
<div id="map" style="width: 100%; height: 600px;"></div>
```

## Data Sources

- Event data is pulled from our training management system
- Location data is geocoded using Mapbox Geocoding API
- Real-time updates are provided via WebSockets
