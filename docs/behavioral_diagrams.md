# Behavioral Diagrams

This document contains behavioral diagrams representing the flow of the system's main features.

## Sequence Diagram: Page Load and Content Rendering

The following sequence diagram shows how the system loads and dynamically renders content when a user visits the website.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant HTML as index.html
    participant JS as render.js
    participant Data as Data Structures

    User->>Browser: Access Website
    Browser->>HTML: Request index.html
    HTML-->>Browser: Return HTML structure
    Browser->>JS: Load and execute render.js

    Note over JS, Data: Initialize Data Arrays
    JS->>Data: Get chooseusContainer data
    JS->>HTML: Render "Why choose us" section

    JS->>Data: Get specialoffersContainer data
    JS->>HTML: Render "Special offers" section

    JS->>Data: Get reviewContainer data
    JS->>HTML: Render "Reviews" section

    JS->>Data: Get postContainer data
    JS->>HTML: Render "Recent posts" section

    Browser->>User: Display fully rendered page
```

## Activity Diagram: Mobile Menu Interaction

```mermaid
stateDiagram-v2
    [*] --> MenuClosed
    MenuClosed --> MenuOpening : Click Hamburger Icon
    MenuOpening --> MenuOpen : Set active class
    MenuOpen --> MenuClosing : Click Close Icon
    MenuClosing --> MenuClosed : Remove active class
```
