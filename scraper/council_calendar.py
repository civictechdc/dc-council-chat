import json
import requests
from bs4 import BeautifulSoup


def fetch_calendar():
    """
    fetch_calendar retrieves HTML from the DC Council calendar
    (http://dccouncil.us/calendar)
    :return: json array containing calendar events
    """
    html_calendar = requests.get("http://dccouncil.us/calendar", timeout=5.0)

    soup = BeautifulSoup(html_calendar.content, "html.parser")
    event_meta = soup.find_all('div', {'class': 'event-description-dev-metabox'})
    event_desc = soup.find_all('div', {'class': 'event-description-content-dev'})

    return parse_events(event_meta, event_desc)


def parse_events(event_metadata, event_description):
    """
    parse_events takes HTML and outputs a list containing events with
    the event metadata (left column) and event description (right column)
    :param event_metadata: list of divs matching the left column on the calendar
    :param event_description: list of divs matching the right column on the calendar
    :return: list of objects containing the event data
    """
    events = []

    for i in range(0, len(event_metadata)):
        event = {}
        metadata = event_metadata[i].find_all("p")
        event["date"] = metadata[0].text
        event["time"] = metadata[1].text
        event["room"] = metadata[2].text

        title = event_description[i].find("h3")
        if title:
            event["title"] = title.text
            # Removes the event title from the description
            title.extract()

        event["description"] = unicode(event_description[i])

        events.append(event)

    return events


if __name__ == "__main__":
    dc_council_events = fetch_calendar()
    print(json.dumps(dc_council_events))
