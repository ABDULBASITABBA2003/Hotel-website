# Structural Diagrams

This document contains structural diagrams showing the relationship between the main components of the Hotel Website.

## Class Diagram

While the project is implemented using procedural JavaScript, the following diagram represents the logical structure of the UI components and their rendering logic.

```mermaid
classDiagram
    class WebPage {
        +index.html
        +styles.css
        +render.js
    }

    class Renderer {
        +renderProduct(chooseusContainer)
        +renderContainer(specialoffersContainer)
        +renderReview(reviewContainer)
        +renderPost(postContainer)
    }

    class Data {
        +chooseusContainer: Array
        +specialoffersContainer: Array
        +reviewContainer: Array
        +postContainer: Array
    }

    class UI_Component {
        +Header
        +HeroSection
        +WhyChooseUs
        +SpecialOffers
        +Reviews
        +RecentPosts
        +Footer
    }

    WebPage --> Renderer : executes
    Renderer --> Data : consumes
    Renderer --> UI_Component : updates
```

## Package Diagram

```mermaid
graph TD
    Root[Project Root] --> Assets[assets/]
    Root --> Docs[docs/]
    Root --> HTML[index.html]
    Root --> CSS[styles.css]
    Root --> JS[render.js]

    Assets --> Images[*.png]
    Docs --> MD[*.md]
```
