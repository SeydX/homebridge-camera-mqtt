/* eslint-disable unicorn/prevent-abbreviations */
'use-strict';

const SettingsModel = require('./settings.model');
const Streams = require('../../services/streams.service');

exports.show = async (req, res) => {
  try {
    const result = await SettingsModel.show();

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

exports.getTarget = async (req, res) => {
  try {
    const result = await SettingsModel.getByTarget(req.params.target);

    if (!result) {
      res.status(404).send({
        statusCode: 404,
        message: 'Target not found',
      });
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

exports.patchTarget = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Bad request',
      });
    }

    const result = await SettingsModel.getByTarget(req.params.target);

    if (!result) {
      return res.status(404).send({
        statusCode: 404,
        message: 'Target not found',
      });
    }

    await SettingsModel.patchByTarget(req.params.target, req.body);

    if (req.params.target === 'cameras') {
      if (req.query.stopStream === 'true') {
        Streams.stopStreams();
      }

      const cameraSettings = req.body;
      for (const camera of cameraSettings) {
        let setting = {
          '-s': camera.resolution,
        };

        if (camera.audio) {
          setting = {
            ...setting,
            '-codec:a': 'mp2',
            '-ar': '44100',
            '-ac': '1',
            '-b:a': '128k',
          };
        } else {
          Streams.delStreamOptions(camera.name, ['-codec:a', '-ar', '-ac', '-b:a']);
        }

        Streams.setStreamOptions(camera.name, setting);
      }
    }

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

exports.reset = async (req, res) => {
  try {
    await SettingsModel.resetSettings();

    res.status(204).send({});
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};
