const uiDesignConfig = {
  "ui_system": {
    "theme": {
      "style": "glassmorphism",
      "background": {
        "type": "blur",
        "opacity": 0.7,
        "color": "rgba(25, 25, 25, 0.6)",
        "blur": "20px"
      },
      "colors": {
        "primary": "#FF6A00",
        "secondary": "#FFB100",
        "accent": "#FFFFFF",
        "text": "#EAEAEA",
        "text_dim": "#A9A9A9",
        "success": "#4CAF50",
        "warning": "#FFC107",
        "danger": "#F44336"
      },
      "fonts": {
        "heading": "Inter, sans-serif",
        "body": "Poppins, sans-serif"
      },
      "shadows": {
        "card": "0 4px 20px rgba(0,0,0,0.3)",
        "soft": "0 2px 10px rgba(0,0,0,0.2)"
      },
      "borders": {
        "radius": "20px",
        "style": "solid",
        "width": "1px",
        "color": "rgba(255,255,255,0.2)"
      }
    },
    "layout": {
      "header": {
        "title": "My Dashboard",
        "stats": [
          { "label": "Total Balance", "value": "$789,999.56", "icon": "💰" },
          { "label": "Earnings", "value": "$998,999.56", "icon": "📈" },
          { "label": "Expenses", "value": "$39,999.67", "icon": "💳" }
        ]
      },
      "statistics": {
        "title": "Statistic",
        "chart": {
          "type": "line",
          "datasets": [
            { "label": "Groceries", "color": "#FF6A00" },
            { "label": "Invest Corporate", "color": "#FFD700" },
            { "label": "Hobbies", "color": "#00C2FF" }
          ]
        }
      },
      "goals": {
        "title": "My Goals",
        "items": [
          { "label": "Travel Abroad", "progress": 60, "color": "#FF6A00" },
          { "label": "Real Estate", "progress": 89, "color": "#00C2FF" }
        ]
      },
      "business": {
        "title": "Business",
        "target": "$1,000,000.00",
        "savings": "$700,345.98",
        "progress": 65,
        "color": "#FFB100"
      },
      "card": {
        "title": "Exclusive Card",
        "holder": "Emmanuella Takureea",
        "brand": "Visa",
        "number": "•••• •••• •••• 7430",
        "expiry": "09/27",
        "balance": "$74,330",
        "gradient": ["#FF6A00", "#FF3A00"]
      },
      "transactions": {
        "title": "Month Transaction",
        "items": [
          {
            "name": "Akeem Jamiu",
            "label": "January Salary",
            "date": "15.01.2024 13:30PM",
            "amount": "$2,000.99"
          }
        ]
      },
      "sidebar": {
        "items": [
          { "icon": "🏠", "label": "Dashboard" },
          { "icon": "💳", "label": "Cards" },
          { "icon": "📊", "label": "Reports" },
          { "icon": "⚙️", "label": "Settings" }
        ]
      }
    }
  }
};

export default uiDesignConfig;