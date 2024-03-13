from __init__ import *


class Lecture():
    def __init__(self, start, end, title, description, location, group, isAllDay, showAlerts, showAsBusy, color, colorText, colorBorder, repeatEveryExcludeDays, repeatEnds, url, repeatEveryCustomValue, repeatEvery, repeatEveryCustomType, organizerName, organizerEmail, type, locked, costumTags, alertOffset, id, created, lastUpdated) -> None:
        self.start = start
        self.end = end
        self.title = title
        self.description = description
        self.location = location
        self.group = group
        self.isAllDay = isAllDay
        self.showAlerts = showAlerts
        self.showAsBusy = showAsBusy
        self.color = color
        self.colorText = colorText
        self.colorBorder = colorBorder
        self.repeatEveryExcludeDays = repeatEveryExcludeDays
        self.repeatEnds = repeatEnds
        self.url = url
        self.repeatEveryCustomValue = repeatEveryCustomValue
        self.repeatEvery = repeatEvery
        self.repeatEveryCustomType = repeatEveryCustomType
        self.organizerName = organizerName
        self.organizerEmail = organizerEmail
        self.type = type
        self.locked = locked
        self.costumTags = costumTags
        self.alertOffset = alertOffset
        self.id = id
        self.created = created
        self.lastUpdated = lastUpdated

    def return_info_json():
        pass


class Lecturer():
    def __init__(self, name, e_mail) -> None:
        self.name = name,
        self.e_mail = e_mail

    def return_info_json(self):
        return {
            "name": self.name,
            "e_mail": self.e_mail
        }


class Backend():
    def __init__(self) -> None:
        self.lectures = list()
        self.lecturers = list()
        self.current_user = Lecturer()

    def create_app(self):
        app = Flask(__name__)
        CORS(app)

        @app.route("/test", methods=["GET"])
        def test():
            return jsonify({"success": True,
                            "message": "Hello World"})

        # GET mit /lecture
        # POST mit den Eventdaten als Body
        @app.route('/lecture', methods=["POST", "GET"])
        def lectures():
            if request.method == "POST":
                try:
                    json_event = request.get_json()
                    new_lecture = Lecture(json_event['from'], json_event['to'], json_event['title'], json_event['description'], json_event['location'], json_event['group'], json_event['isAllDay'],
                                          json_event['showAlerts'], json_event['showAsBusy'], json_event['color'], json_event[
                                              'colorText'], json_event['colorBorder'], json_event['repeatEveryExcludeDays'],
                                          json_event['repeatEnds'], json_event['url'], json_event[
                                              'repeatEveryCustomValue'], json_event['repeatEvery'], json_event['repeatEveryCustomType'],
                                          self.current_user.name, self.current_user.e_mail, json_event[
                                              'type'], json_event['locked'], json_event['customTags'], json_event['alertOffset'],
                                          json_event['id'], json_event['created'], json_event['lastUpdated'])
                    self.lectures.append(new_lecture)
                    print(self.lectures)
                    return jsonify({"success": True,
                                    "message": "Added lecture to the list"})
                except Exception as e:
                    print(e)
                    return f"Error processing event data: {e}", 500
            elif request.method == "GET":
                for lecture in self.lectures:
                    if lecture['organizerName'] == self.current_user.name:
                        pass

        # GET mit /lecturer?name=""
        # POST mit den Dozentendaten als Body
        @app.route('/lecturer', methods=["POST", "GET"])
        def lecturer():
            if request.method == "POST":
                try:
                    json_lecturer = request.get_json()
                    new_lecturer = Lecturer(
                        json_lecturer['name'], json_lecturer['e_mail'])
                    self.lecturers.append(new_lecturer)
                    print(self.lecturers)
                    return jsonify({"success": True,
                                    "message": "Added lecturer to the list"})
                except Exception as e:
                    print(e)
                    return f"Error processing event data: {e}", 500
            elif request.method == "GET":
                pass

        # POST mit /signin?name=""
        @app.route('/signin', methods=["POST"])
        def sign_in():
            name = request.args.get('name')
            for lecturer in self.lecturers:
                if lecturer.name == name:
                    self.current_user = lecturer
                    return jsonify(lecturer.return_info_json())
            return jsonify({
                "Success": False,
                "Message": "User not found!"
            })

        return app


if __name__ == "__main__":
    backend = Backend()
    app = backend.create_app()
    app.run(host='0.0.0.0', port=8080, debug=True)
