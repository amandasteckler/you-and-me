class Auth
 def self.issue(payload)
   JWT.encode(payload, Rails.application.secrets[:secret_key_base], 'HS256')
 end

 def self.decode(token)
   JWT.decode(token, Rails.application.secrets[:secret_key_base], true, { algorithm: 'HS256' }).first
 end

 def self.auth_secret
   ENV["AUTH_SECRET"]
 end
end
