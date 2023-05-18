(function () {
	tinymce.PluginManager.add("jitsi_meet_embed_plugin", function (editor, url) {
		editor.addButton("jitsi_meet_embed_button", {
			text: "Jitsi Meet",
			icon: false,
			onclick: function () {
				editor.windowManager.open({
					title: "Insert Jitsi Meeting",
					body: [
						{
							type: "textbox",
							name: "room",
							label: "Room Name",
							value: "",
						},
						{
							type: "textbox",
							name: "width",
							label: "Width",
							value: "100%",
						},
						{
							type: "textbox",
							name: "height",
							label: "Height",
							value: "480px",
						},
					],
					onsubmit: function (e) {
						var shortcode =
							'[jitsi-meet room="' +
							e.data.room +
							'" width="' +
							e.data.width +
							'" height="' +
							e.data.height +
							'"]';
						editor.insertContent(shortcode);
					},
				});
			},
		});
	});
})();
