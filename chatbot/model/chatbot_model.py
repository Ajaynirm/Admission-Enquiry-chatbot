class DomainClassifier:
    def __init__(self):
        self.domains = {
            "Engineering": ["coding", "math", "physics"],
            "Medicine": ["biology", "chemistry", "patients"],
            "Arts": ["literature", "history", "creativity"],
        }

    def get_domain_recommendation(self, query):
        for domain, keywords in self.domains.items():
            if any(keyword in query.lower() for keyword in keywords):
                return {"domain": domain, "message": f"You seem interested in {domain}"}
        return {"domain": "General", "message": "Please provide more details for domain suitability."}
